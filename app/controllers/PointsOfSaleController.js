const { PtoStock, PtoVenta } = require("../models/index");

exports.getPointsOfSale = async (req, res) => {
  try {
    const ptosVenta = await PtoVenta.findAll({
      attributes: ["id", "descripcion", "PtoStockId"],
      where: { EmpresaId: req.usuarioEmpresaId },
      include: { model: PtoStock, attributes: ["descripcion"] },
      raw: true,
    });
    res.status(200).json(ptosVenta);
  } catch (error) {
    res.json(error);
  }
};
