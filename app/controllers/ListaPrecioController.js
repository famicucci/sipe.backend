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

exports.getPriceList = async (req, res) => {
  try {
    const list = await ListaPrecio.findOne({
      attributes: ["id", "descripcion", "estado", "createdAt"],
      where: { id: req.params.id, EmpresaId: req.usuarioEmpresaId },
    });

    res.status(200).json(list);
  } catch (error) {
    res.statusMessage = "there was an error getting the price list";
    return res.status(400).end();
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

exports.updateStatusPriceList = async (req, res) => {
  const statusList = { 1: "Vigente", 2: "No vigente" };

  try {
    await ListaPrecio.update(
      {
        estado: statusList[req.body.estadoId],
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).json("price list updated");
  } catch (error) {
    res.statusMessage = "there was an error";
    return res.status(400).end();
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
