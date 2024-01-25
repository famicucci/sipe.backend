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
