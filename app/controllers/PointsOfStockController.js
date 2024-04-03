const { PtoStock, Stock, Producto } = require("../models/index");
const { Op } = require("sequelize");

// traer los puntos de stock
exports.getPointsOfStock = async (req, res) => {
  try {
    // consulta a tabla stocks
    const pointsOfStocks = await PtoStock.findAll({
      attributes: ["id", "descripcion"],
      where: { EmpresaId: req.usuarioEmpresaId },
    });
    // osrdenar los puntos stock acá

    const orderedPointsOfStock = pointsOfStocks.sort((a, b) => {
      if (a.descripcion > b.descripcion) return 1;
      if (a.descripcion < b.descripcion) return -1;
      return 0;
    });

    res.status(200).json(orderedPointsOfStock);
  } catch (error) {
    res.json(error);
  }
};

exports.createPointOfStock = async (req, res) => {
  try {
    // create stock point
    const newStockPoint = await PtoStock.create({
      descripcion: req.body.descripcion,
      EmpresaId: req.usuarioEmpresaId,
    });

    // get all products
    const products = await Producto.findAll({
      where: { EmpresaId: req.usuarioEmpresaId },
    });

    // create stocks of products
    const stocksToCreate = products.map((item) => ({
      ProductoCodigo: item.codigo,
      cantidad: 0,
      PtoStockId: newStockPoint.id,
    }));

    await Stock.bulkCreate(stocksToCreate);

    res.status(200).json(newStockPoint);
  } catch (error) {
    res.statusMessage = `Hubo un error`;
    return res.status(400).end();
  }
};

exports.deleteStockOfPoint = async (req, res) => {
  // check if there is a product with available stock
  try {
    const thereIsStock = await Stock.findOne({
      where: {
        PtoStockId: req.params.id,
        cantidad: { [Op.gt]: 0 },
      },
    });

    if (thereIsStock) {
      res.statusMessage = `this stock point has available stock`;
      return res.status(400).end();
    }

    await PtoStock.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json("stock of point deleted");
  } catch (error) {
    res.statusMessage = `Hubo un error`;
    return res.status(400).end();
  }
};
