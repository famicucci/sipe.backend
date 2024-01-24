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
