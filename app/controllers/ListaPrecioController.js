const { ListaPrecio } = require("../models/index");

exports.getPriceLists = async (req, res) => {
  try {
    const precios = await ListaPrecio.findAll({
      attributes: ["id", "descripcion", "estado", "createdAt"],
      where: { EmpresaId: req.usuarioEmpresaId },
    });

    res.status(200).json(precios);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createPriceList = async (req, res) => {
  const statusList = { 1: "Vigente", 2: "No vigente" };

  try {
    const precios = await ListaPrecio.create({
      descripcion: req.body.descripcion,
      estado: statusList[req.body.estado],
      EmpresaId: req.usuarioEmpresaId,
    });

    res.status(200).json(precios);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletePriceList = async (req, res) => {
  try {
    await ListaPrecio.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json("price list deleted");
  } catch (error) {
    res.statusMessage = "error deleting price list";
    return res.status(400).end();
  }
};
