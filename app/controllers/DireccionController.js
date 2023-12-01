const { Direccion } = require("../models/index");

exports.getAdresses = async (req, res) => {
  try {
    const direccion = await Direccion.findAll(
      {
        where: { ClienteId: req.params.clientId },
      },
      { raw: true }
    );
    res.status(200).json(direccion);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.crearDireccion = async (req, res) => {
  try {
    const direccion = await Direccion.create({
      calle: req.body.calle,
      numeroCalle: req.body.numeroCalle,
      piso: req.body.piso,
      depto: req.body.depto,
      barrio: req.body.barrio,
      ciudad: req.body.ciudad,
      provincia: req.body.provincia,
      codPostal: req.body.codPostal,
      refDireccion: req.body.refDireccion,
      ClienteId: req.body.ClienteId,
    });
    res.status(200).json(direccion);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteAdress = async (req, res) => {
  try {
    await Direccion.destroy({ where: { id: JSON.parse(req.params.Ids) } });
    res.status(200).json({ msg: "Adresses were deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
};
