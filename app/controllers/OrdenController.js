const {
  Orden,
  OrdenDetalle,
  OrdenEstado,
  Stock,
  PtoStock,
  PtoVenta,
  MovimientoStock,
  Factura,
  FacturaDetalle,
  Cliente,
  Pago,
  MetodoPago,
  Usuario,
  TipoEnvio,
  Producto,
  Direccion,
} = require("../models/index");
const { Op } = require("sequelize");
const { sequelize } = require("../models/index");
const moment = require("moment");

// traer stock total y precios
exports.traerOrdenes = async (req, res) => {
  const searchQuery = req.query.search;
  const page = req.query.page; // Número de página (2 para los segundos 10 resultados)
  const pageSize = 50; // Tamaño de la página

  try {
    const ordenes = await Orden.findAll({
      attributes: ["id", "createdAt"],
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Factura,
          attributes: ["id", "estadoPago"],
        },
        {
          model: Cliente,
          attributes: ["nombre", "apellido"],
        },
        {
          model: OrdenEstado,
          attributes: ["id", "descripcion"],
        },
        {
          model: TipoEnvio,
          attributes: ["descripcion"],
        },
      ],
      where: {
        [Op.or]: [
          { id: { [Op.like]: `%${searchQuery}%` } },
          { createdAt: { [Op.like]: `%${searchQuery}%` } },
          { "$Factura.id$": { [Op.like]: `%${searchQuery}%` } },
          { "$Factura.estadoPago$": { [Op.like]: `%${searchQuery}%` } },
          { "$Cliente.nombre$": { [Op.like]: `%${searchQuery}%` } },
          { "$Cliente.apellido$": { [Op.like]: `%${searchQuery}%` } },
          { "$OrdenEstado.descripcion$": { [Op.like]: `%${searchQuery}%` } },
          { "$TipoEnvio.descripcion$": { [Op.like]: `%${searchQuery}%` } },
        ],
        OrdenEstadoId: { [Op.not]: 11 },
      },
      limit: pageSize,
      offset: (page - 1) * pageSize,
      raw: true,
    });
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.crearOrden = async (req, res) => {
  // traer todos los stocks de productos
  const stocks = await Stock.findAll({
    attributes: { exclude: ["updatedAt"] },
  });

  let prodsSinStock = [];
  let cantsFinales = [];
  let detalleOrden = req.body.detalleOrden;

  // verifico que detalle orden no tenga un producto en cero, si lo tiene lo elimino
  detalleOrden = detalleOrden.filter((x) => x.cantidad !== 0);

  for (let k = 0; k < detalleOrden.length; k++) {
    const element = detalleOrden[k];
    const cantProdCarr = element.cantidad;

    // esto lo tiene que hacer si el producto esta disponible
    if (element.PtoStockId !== null) {
      const prodStock = stocks.find(
        (x) =>
          x.ProductoCodigo === element.ProductoCodigo &&
          x.PtoStockId === element.PtoStockId
      );

      let cantProdStock;
      if (prodStock) {
        cantProdStock = prodStock.cantidad;
      } else {
        res.status(400).send({
          msg: `El producto ${element.ProductoCodigo} o su punto de stock no se encuentran en la base de datos`,
          severity: "error",
        });
        return;
      }

      const cantfinal = cantProdStock - cantProdCarr;

      // comparar cantidades con los productos del carrito para ver si estan disponibles
      if (cantfinal < 0) {
        prodsSinStock.push(element.ProductoCodigo);
      } else {
        cantsFinales.push({
          ProductoCodigo: element.ProductoCodigo,
          cantFinal: cantfinal,
          PtoStockId: element.PtoStockId,
        });
      }
    }
  }

  if (prodsSinStock.length > 0) {
    res.status(400).send({ productWithoutStock: prodsSinStock });
    return;
  }

  // rollback
  const t = await sequelize.transaction();
  try {
    // debe hacer los movimientos de stock
    // si todo va bien hacer un ciclo for con un update para cada producto
    for (let i = 0; i < cantsFinales.length; i++) {
      const element = cantsFinales[i];

      await Stock.update(
        { cantidad: element.cantFinal },
        {
          transaction: t,
          where: {
            ProductoCodigo: element.ProductoCodigo,
            PtoStockId: element.PtoStockId,
          },
        }
      );
    }

    const orden = await Orden.create(
      {
        observaciones: req.body.observaciones,
        direccionEnvio: req.body.direccionEnvio,
        tarifaEnvio: req.body.tarifaEnvio,
        ordenEcommerce: !req.body.ordenEcommerce
          ? null
          : req.body.ordenEcommerce,
        ClienteId: req.body.ClienteId,
        PtoVentaId: req.body.PtoVentaId,
        UsuarioId: req.usuarioId,
        OrdenEstadoId: req.body.OrdenEstadoId,
        TipoEnvioId: req.body.TipoEnvioId,
        detalleOrden: detalleOrden,
      },
      {
        include: "detalleOrden",
        transaction: t,
      }
    );

    // crear los movimientos de stock
    for (let k = 0; k < detalleOrden.length; k++) {
      const element = detalleOrden[k];
      const cantProdCarr = element.cantidad;
      const cod = element.ProductoCodigo;
      const ptoStockId = element.PtoStockId;

      if (ptoStockId !== null) {
        await MovimientoStock.create(
          {
            cantidad: cantProdCarr,
            motivo: "venta",
            ProductoCodigo: cod,
            PtoStockId: ptoStockId,
            UsuarioId: req.usuarioId,
          },
          {
            transaction: t,
          }
        );
      }
    }

    await t.commit();
    if (prodsSinStock.length > 0) {
      res.json({
        orden: orden,
        msg: `Los productos ${prodsSinStock.map(
          (x) => `${x} `
        )}fueron eliminados del carrito por no contar con unidades suficientes`,
        severity: "warning",
      });
    } else {
      res.json(orden);
    }
  } catch (error) {
    await t.rollback();
    res.status(400).send({ error: "Hubo un error" });
  }
};

// create an order without remove stocks
exports.createOrderSimple = async (req, res) => {
  try {
    const orden = await Orden.create(
      {
        observaciones: req.body.observaciones,
        direccionEnvio: req.body.direccionEnvio,
        tarifaEnvio: req.body.tarifaEnvio,
        ordenEcommerce: req.body.ordenEcommerce,
        ClienteId: req.body.ClienteId,
        PtoVentaId: req.body.PtoVentaId,
        UsuarioId: req.usuarioId,
        OrdenEstadoId: req.body.OrdenEstadoId,
        TipoEnvioId: req.body.TipoEnvioId,
        detalleOrden: req.body.detalleOrden,
      },
      {
        include: "detalleOrden",
      }
    );
    res.status(200).send(orden);
  } catch (error) {
    res.status(400).send(error);
  }
};

// traer stock total y precios
exports.traerOrdenesFinalizadas = async (req, res) => {
  const dates = JSON.parse(req.params.Dates);

  const startDate = moment(dates.startDate).subtract({
    hours: 3,
  });
  const endDate = moment(dates.endDate).add({
    hours: 21,
  });

  try {
    const ordenes = await Orden.findAll({
      attributes: {
        exclude: ["ClienteId", "UsuarioId", "PtoVentaId", "OrdenEstadoId"],
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Factura,
          attributes: {
            exclude: ["OrdenId", "UsuarioId", "tipo", "estado", "ClienteId"],
          },
          include: [
            {
              model: Cliente,
              attributes: { exclude: ["EmpresaId", "createdAt", "updatedAt"] },
            },
            {
              model: FacturaDetalle,
              as: "detalleFactura",
              attributes: { exclude: ["FacturaId"] },
              include: [
                {
                  model: Producto,
                  attributes: ["descripcion"],
                },
              ],
            },
            {
              model: Pago,
              attributes: {
                exclude: ["FacturaId", "UsuarioId"],
              },
            },
          ],
        },
        {
          model: Cliente,
          attributes: { exclude: ["EmpresaId", "createdAt", "updatedAt"] },
          include: { model: Direccion, as: "direcciones" },
        },
        {
          model: Usuario,
          attributes: ["usuario"],
        },
        {
          model: OrdenDetalle,
          as: "detalleOrden",
          attributes: {
            exclude: ["OrdenId", "PtoStockId"],
          },
          include: [
            { model: PtoStock, attributes: ["id", "descripcion"] },
            {
              model: Producto,
              attributes: ["descripcion"],
            },
          ],
        },
        {
          model: PtoVenta,
          as: "PtoVenta",
          attributes: ["id", "descripcion", "PtoStockId"],
        },
        {
          model: OrdenEstado,
          attributes: ["id", "descripcion"],
        },
      ],
      where: {
        OrdenEstadoId: 11,
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
    });
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.traerOrden = async (req, res) => {
  try {
    const orden = await Orden.findOne({
      attributes: [
        "id",
        "observaciones",
        "ordenEcommerce",
        "createdAt",
        "direccionEnvio",
        "tarifaEnvio",
      ],

      include: [
        {
          model: TipoEnvio,
          attributes: ["id", "descripcion"],
        },
        {
          model: Cliente,
          attributes: ["nombre", "apellido"],
        },
        {
          model: PtoVenta,
          as: "PtoVenta",
          attributes: ["id", "descripcion"],
        },
        {
          model: Factura,
          attributes: ["id"],
        },
        {
          model: OrdenDetalle,
          as: "detalleOrden",
          attributes: ["ProductoCodigo", "cantidad"],
          include: [
            {
              model: Producto,
              attributes: ["descripcion"],
            },
            { model: PtoStock, attributes: ["id", "descripcion"] },
          ],
        },
      ],
      where: { id: req.params.Id },
    });
    res.status(200).json(orden);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.traerOrdenesCliente = async (req, res) => {
  try {
    const ordenes = await Orden.findAll({
      attributes: {
        exclude: ["ClienteId", "UsuarioId", "PtoVentaId", "OrdenEstadoId"],
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Factura,
          attributes: {
            exclude: ["OrdenId", "UsuarioId", "tipo", "estado", "ClienteId"],
          },
          include: [
            {
              model: Cliente,
              attributes: { exclude: ["EmpresaId", "createdAt", "updatedAt"] },
            },
            {
              model: FacturaDetalle,
              as: "detalleFactura",
              attributes: { exclude: ["FacturaId"] },
              include: [
                {
                  model: Producto,
                  attributes: ["descripcion"],
                },
              ],
            },
            {
              model: Pago,
              attributes: {
                exclude: ["FacturaId", "UsuarioId"],
              },
            },
          ],
        },
        {
          model: Cliente,
          attributes: { exclude: ["EmpresaId", "createdAt", "updatedAt"] },
          include: { model: Direccion, as: "direcciones" },
        },
        {
          model: Usuario,
          attributes: ["usuario"],
        },
        {
          model: OrdenDetalle,
          as: "detalleOrden",
          attributes: {
            exclude: ["OrdenId", "PtoStockId"],
          },
          include: [
            { model: PtoStock, attributes: ["id", "descripcion"] },
            {
              model: Producto,
              attributes: ["descripcion"],
            },
          ],
        },
        {
          model: PtoVenta,
          as: "PtoVenta",
          attributes: ["id", "descripcion", "PtoStockId"],
        },
        {
          model: OrdenEstado,
          attributes: ["id", "descripcion"],
        },
      ],
      where: { ClienteId: req.params.IdCliente },
    });
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.modificarOrden = async (req, res) => {
  // si viene tarifaEnvio debo verificar que la orden no tenga una factura vigente
  if (req.body.tarifaEnvio) {
    // consultar la tarifa de envio actual
    try {
      const orden = await Orden.findOne({ where: { id: req.params.Id } });

      if (parseFloat(req.body.tarifaEnvio) !== parseFloat(orden.tarifaEnvio)) {
        const factura = await Orden.findOne({
          attributes: [],
          include: {
            model: Factura,
            attributes: ["id", "estado"],
            where: { estado: "v" },
          },
          where: { id: req.params.Id },
        });

        if (factura) {
          const estado = factura.Facturas[0].estado;
          if (estado === "v") {
            res.status(400).send({
              msg: "No se puede cambiar el costo de envio. La orden tiene una factura vigente",
              severity: "error",
            });
            return;
          }
        }
      }
    } catch (error) {
      res.status(400).send({
        msg: "Hubo un error",
        severity: "error",
      });
    }
  }

  try {
    await Orden.update(
      {
        observaciones: req.body.observaciones,
        direccionEnvio: req.body.direccionEnvio,
        TipoEnvioId: req.body.TipoEnvioId,
        PtoVentaId: req.body.PtoVentaId,
        tarifaEnvio: req.body.tarifaEnvio,
        OrdenEstadoId: req.body.OrdenEstadoId,
        ordenEcommerce: req.body.ordenEcommerce,
      },
      {
        where: {
          id: req.params.Id,
        },
      }
    );

    res
      .status(200)
      .send({ msg: "La orden ha sido modificada!", severity: "success" });
  } catch (error) {
    res.status(400).send({
      msg: "Hubo un error",
      severity: "error",
    });
  }
};

exports.eliminarOrden = async (req, res) => {
  try {
    const invoice = await Orden.findOne({
      attributes: [],
      include: {
        model: Factura,
        attributes: ["id", "estado"],
        where: { estado: "v" },
      },
      where: { id: req.params.Id },
    });

    if (invoice) {
      res.status(400).send({
        msg: "La orden no puede ser eliminada porque tiene una factura vigente",
        severity: "error",
      });
      return;
    } else {
      // rollback
      const t = await sequelize.transaction();
      try {
        // restore products in the stock
        const r = await Orden.findOne({
          attributes: [],
          include: {
            model: OrdenDetalle,
            as: "detalleOrden",
          },
          where: { id: req.params.Id },
        });

        r.detalleOrden.forEach(async (element) => {
          if (element.PtoStockId)
            await Stock.increment(
              { cantidad: element.cantidad },
              {
                transaction: t,
                where: {
                  ProductoCodigo: element.ProductoCodigo,
                  PtoStockId: element.PtoStockId,
                },
              }
            );
        });

        await Orden.destroy({
          transaction: t,
          where: {
            id: req.params.Id,
          },
        });

        await t.commit();
        res
          .status(200)
          .send({ msg: "La orden ha sido eliminada!", severity: "success" });
      } catch (error) {
        await t.rollback();
        res.status(400).send({ msg: "Hubo un error!", severity: "error" });
      }
    }
  } catch (error) {
    res.status(400).send({ msg: "Hubo un error!", severity: "error" });
  }
};
