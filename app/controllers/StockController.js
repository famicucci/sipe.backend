const {
  Stock,
  MovimientoStock,
  Producto,
  PtoStock,
  Usuario,
} = require("../models/index");
const { sequelize } = require("../models/index");
const { Op } = require("sequelize");

exports.getStock = async (req, res) => {
  const searchQuery = req.query.search;
  const page = req.query.page;
  const pageSize = 50; // Tamaño de la página

  try {
    // consulta a tabla stocks
    const stocks = await Stock.findAll({
      attributes: [
        "ProductoCodigo",
        [sequelize.fn("sum", sequelize.col("cantidad")), "cantidad"],
      ],
      where: {
        [Op.or]: [
          { ProductoCodigo: { [Op.like]: `%${searchQuery}%` } },
          { "$Producto.descripcion$": { [Op.like]: `%${searchQuery}%` } },
          { cantidad: { [Op.like]: `%${searchQuery}%` } },
        ],
      },
      group: ["ProductoCodigo"],
      include: {
        model: Producto,
        attributes: ["descripcion"],
        where: { EmpresaId: req.usuarioEmpresaId },
      },
      limit: pageSize,
      offset: (page - 1) * pageSize,
      raw: true,
    });
    res.json(stocks);
  } catch (error) {
    res.json(error);
  }
};

// modificar
exports.modificarStock = async (req, res) => {
  try {
    // trae el producto actual
    const producto = await Stock.findOne({
      attributes: ["cantidad"],
      where: {
        ProductoCodigo: req.body.ProductoCodigo,
        PtoStockId: req.body.PtoStockId,
      },
    });

    // calcula la diferencia en la cantidad
    const cambioCantidad = req.body.cantidad - producto.cantidad;

    // si la cant ingresada es negativa o si el cambio de cantidad es cero aborta la operación
    if (cambioCantidad === 0) {
      return res
        .status(200)
        .send({ msg: "No hubo cambios en la cantidad", severity: "warning" });
    }

    if (req.body.cantidad < 0) {
      return res
        .status(500)
        .send({ msg: "La cantidad no puede ser negativa!", severity: "error" });
    }

    if (producto) {
      const modificaStock = await Stock.update(
        { cantidad: req.body.cantidad },
        {
          where: {
            ProductoCodigo: req.body.ProductoCodigo,
            PtoStockId: req.body.PtoStockId,
          },
        }
      );

      if (modificaStock[0]) {
        // insert en tabla movimientos
        const registraMovimiento = await MovimientoStock.create({
          cantidad: cambioCantidad,
          motivo: req.body.motivo,
          ProductoCodigo: req.body.ProductoCodigo,
          PtoStockId: req.body.PtoStockId,
          UsuarioId: req.usuarioId,
        });
        return res.status(200).send({
          msg: `El stock ha sido modificado en ${cambioCantidad} unidades`,
          severity: "success",
        });
      } else {
        res
          .status(400)
          .send({ msg: "No se produjo ningún cambio en la base de datos" });
      }
    } else {
      res.json({ msg: "Hubo un error" });
    }
  } catch (error) {
    res.json({ msg: "Hubo un error" });
  }
};

// traer stock por punto de stock
exports.traerStockTotal = async (req, res) => {
  try {
    // consulta a tabla stocks
    const stocks = await Stock.findAll({
      attributes: [
        "ProductoCodigo",
        [sequelize.fn("sum", sequelize.col("cantidad")), "cantidad"],
      ],
      group: ["ProductoCodigo"],
      include: {
        model: Producto,
        attributes: ["descripcion"],
        where: { EmpresaId: req.usuarioEmpresaId },
      },
      raw: true,
    });
    res.json(stocks);
  } catch (error) {
    res.json(error);
  }
};

// traer stock del producto
exports.traerStockProducto = async (req, res) => {
  try {
    // consulta a tabla stocks
    const stocks = await Stock.findAll({
      attributes: ["id", "cantidad", "ProductoCodigo", "PtoStockId"],
      where: { ProductoCodigo: req.params.codigo },
      include: [
        {
          model: Producto,
          attributes: ["descripcion"],
          where: { EmpresaId: req.usuarioEmpresaId },
        },
        { model: PtoStock, attributes: ["descripcion"] },
      ],

      raw: true,
    });
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).send({ msg: "Hubo un error" });
  }
};

// traer stock por punto de stock
exports.traerStockPtoStock = async (req, res) => {
  try {
    // consulta a tabla stocks
    const stocks = await Stock.findAll({
      attributes: ["id", "cantidad", "ProductoCodigo", "PtoStockId"],
      include: [
        {
          model: Producto,
          attributes: ["descripcion"],
          where: { EmpresaId: req.usuarioEmpresaId },
        },
        { model: PtoStock, attributes: ["descripcion"] },
      ],

      raw: true,
    });
    res.json(stocks);
  } catch (error) {
    res.status(500).send({ msg: "Hubo un error" });
  }
};

// traer movimientos de stock
exports.traerMovimientos = async (req, res) => {
  try {
    const movimientos = await MovimientoStock.findAll({
      attributes: [
        "id",
        "cantidad",
        "motivo",
        "createdAt",
        "ProductoCodigo",
        "PtoStockId",
        "UsuarioId",
      ],
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Producto,
          attributes: ["descripcion"],
          where: { EmpresaId: req.usuarioEmpresaId },
        },
        {
          model: PtoStock,
          attributes: ["descripcion"],
          where: { EmpresaId: req.usuarioEmpresaId },
        },
        {
          model: Usuario,
          attributes: ["usuario"],
          where: { EmpresaId: req.usuarioEmpresaId },
        },
      ],
      raw: true,
    });
    res.json(movimientos);
  } catch (error) {
    res.json(error);
  }
};

// traer los puntos de stock
exports.traerPtosStock = async (req, res) => {
  try {
    // consulta a tabla stocks
    const stocks = await PtoStock.findAll({
      attributes: ["id", "descripcion"],
      where: { EmpresaId: req.usuarioEmpresaId },
    });
    res.status(200).json(stocks);
  } catch (error) {
    res.json(error);
  }
};
