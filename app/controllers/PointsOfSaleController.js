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

exports.createPointOfSale = async (req, res) => {
  try {
    const status = await PtoVenta.create({
      descripcion: req.body.descripcion,
      PtoStockId: req.body.ptoStockId,
      EmpresaId: req.usuarioEmpresaId,
    });
    res.status(200).json(status);
  } catch (error) {
    res.statusMessage = `Hubo un error`;
    return res.status(400).end();
  }
};
