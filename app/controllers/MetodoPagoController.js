const { MetodoPago } = require("../models/index");

exports.traerMetodosPago = async (req, res) => {
  try {
    const metodosPago = await MetodoPago.findAll({
      attributes: ["id", "descripcion"],
      where: { EmpresaId: req.usuarioEmpresaId },
    });
    res.status(200).json(metodosPago);
  } catch (error) {
    res.json(error);
  }
};

exports.createPaymentMethod = async (req, res) => {
  try {
    const metodosPago = await MetodoPago.create({
      descripcion: req.body.descripcion,
      EmpresaId: req.usuarioEmpresaId,
    });
    res.status(200).json(metodosPago);
  } catch (error) {
    res.statusMessage = `Hubo un error`;
    return res.status(400).end();
  }
};

exports.deletePaymentMethod = async (req, res) => {
  try {
    await MetodoPago.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json("payment method deleted");
  } catch (error) {
    res.statusMessage = `Hubo un error`;
    return res.status(400).end();
  }
};
