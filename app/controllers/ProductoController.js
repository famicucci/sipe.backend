const {
  Producto,
  PtoStock,
  Empresa,
  Stock,
  Precio,
  Orden,
  OrdenDetalle,
} = require("../models/index");
const { sequelize } = require("../models/index");
const { QueryTypes } = require("sequelize");
const { Op } = require("sequelize");

exports.getProductsWithStockAndPrice = async (req, res) => {
  const searchQuery = req.query.search;
  const page = req.query.page;
  const pageSize = 20;

  try {
    const productos = await Producto.findAll({
      attributes: ["codigo", "descripcion"],
      include: [
        {
          model: Stock,
          as: "stockProducto",
          attributes: ["cantidad", "PtoStockId"],
          include: [
            {
              model: PtoStock,
              attributes: ["descripcion"],
            },
          ],
          where:
            req.params.stockPointId === "outOfStock"
              ? { cantidad: 0 }
              : {
                  PtoStockId: req.params.stockPointId,
                  cantidad: { [Op.gt]: 0 },
                },
        },
        {
          model: Precio,
          attributes: ["pu", "ListaPrecioId"],
          where: { ListaPrecioId: req.params.priceList },
        },
      ],
      where: {
        [Op.or]: [
          { codigo: { [Op.like]: `%${searchQuery}%` } },
          { descripcion: { [Op.like]: `%${searchQuery}%` } },
        ],
        EmpresaId: req.usuarioEmpresaId,
      },
      limit: pageSize,
      offset: (page - 1) * pageSize,
      raw: true,
    });
    res.json(productos);
  } catch (error) {
    res.json(error);
  }
};

exports.traerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      attributes: ["codigo", "descripcion"],
      where: { EmpresaId: req.usuarioEmpresaId },
    });
    res.json(productos);
  } catch (error) {
    res.json(error);
  }
};

exports.crearProducto = async (req, res) => {
  // points of stock of the company
  const ptosStock = await PtoStock.findAll(
    {
      attributes: ["id"],
      include: [
        {
          model: Empresa,
          attributes: [],
          where: { id: req.usuarioEmpresaId },
        },
      ],
    },
    {}
  );

  let stockIniciales = [];
  ptosStock.forEach((ptoStock) => {
    const stockInicial = {
      cantidad: 0,
      PtoStockId: ptoStock.id,
      ProductoCodigo: req.body.codigo,
    };
    stockIniciales.push(stockInicial);
  });

  const productsToCreate = req.body.map((product) => ({
    codigo: product.codigo,
    descripcion: product.descripcion,
    EmpresaId: req.usuarioEmpresaId,
  }));

  const stocksToCreate = stockIniciales.map((stock) => {
    return productsToCreate.map((product) => ({
      ...stock,
      ProductoCodigo: product.codigo,
    }));
  });

  try {
    await Producto.bulkCreate(productsToCreate);
    await Stock.bulkCreate(stocksToCreate.flat());

    res.status(200).json("Prices created");
  } catch (error) {
    res.statusMessage =
      error.message || "there was an error, check the data and try again";
    return res.status(400).end();
  }
};

exports.modificarProducto = async (req, res) => {
  try {
    const producto = await Producto.update(
      {
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
      },
      {
        where: { codigo: req.params.ProductoCodigo },
      }
    );

    // verifica si el update fue exitoso
    if (producto[0]) {
      res.json({ success: "El producto ha sido modificado" });
    } else {
      res.json({ error: "No se produjo ningún cambio en la base de datos" });
    }
  } catch (error) {
    res.json({ error: "Ocurrió un error" });
  }
};

// eliminar
exports.eliminarProducto = async (req, res) => {
  try {
    const ordersDetailsWithProduct = await Orden.findOne({
      attributes: ["id"],
      include: [
        {
          model: OrdenDetalle,
          as: "detalleOrden",
          attributes: ["id"],
          where: { ProductoCodigo: req.params.ProductoCodigo },
        },
      ],
      where: { OrdenEstadoId: { [Op.ne]: 11 } },
    });

    if (ordersDetailsWithProduct) {
      res.statusMessage = "product exist in an order not finalized";
      return res.status(400).end();
    }

    const producto = await Producto.destroy({
      where: { codigo: req.params.ProductoCodigo },
    });

    if (producto) {
      res.json({ success: "Producto eliminado" });
    } else {
      res.json({ error: "No se produjo ningún cambio en la base de datos" });
    }
  } catch (error) {
    res.json(error);
  }
};

exports.traerProductosAMover = async (req, res) => {
  try {
    // const id = 2;
    const productos = await sequelize.query(
      `SELECT ordendetalle.ProductoCodigo, producto.descripcion, ordendetalle.cantidad, ordendetalle.PtoStockId AS ID_Pto_Stock_Producto , pto_stock_producto.descripcion AS Pto_Stock_Producto_Descripcion, ptoventa.PtoStockId AS ID_Pto_Stock_De_Pto_Venta, pto_stock_pto_venta.Descripcion AS Pto_Stock_Pto_Venta_Descripcion
			FROM ordendetalle 
			INNER JOIN producto ON ordendetalle.ProductoCodigo = producto.codigo
			INNER JOIN orden ON ordendetalle.OrdenId = orden.id
			INNER JOIN ptoventa ON orden.PtoVentaId = ptoventa.id
			INNER JOIN ptostock AS pto_stock_producto ON ordendetalle.PtoStockId = pto_stock_producto.id
			INNER JOIN ptostock AS pto_stock_pto_venta ON ptoventa.PtoStockId = pto_stock_pto_venta.id
			WHERE ordendetalle.origen = 'Disponible'
			AND (orden.OrdenEstadoId != '11')
			AND ordendetalle.PtoStockId != ptoventa.PtoStockId
			AND producto.EmpresaId = '1'`,
      {
        type: QueryTypes.SELECT,
      }
    );

    res.json(productos);
  } catch (error) {
    res.json(error);
  }
};
