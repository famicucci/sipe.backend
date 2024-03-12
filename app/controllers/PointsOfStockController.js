const { PtoStock } = require("../models/index");

// traer los puntos de stock
exports.getPointsOfStock = async (req, res) => {
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

exports.createPointOfStock = async (req, res) => {
  try {
    const status = await PtoStock.create({
      descripcion: req.body.descripcion,
      EmpresaId: req.usuarioEmpresaId,
    });
    res.status(200).json(status);
  } catch (error) {
    res.statusMessage = `Hubo un error`;
    return res.status(400).end();
  }
};

exports.deleteStockOfPoint = async (req, res) => {
  try {
    await PtoStock.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json("stock of point deleted");
  } catch (error) {
    res.statusMessage = `Hubo un error`;
    return res.status(400).end();
  }
};
