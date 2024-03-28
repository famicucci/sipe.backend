const { GastoSubcategoria } = require("../models/index");

exports.getBillSubcategories = async (req, res) => {
  try {
    const subcategories = await GastoSubcategoria.findAll({
      attributes: ["id", "descripcion"],
      where: { GastoCategoriaId: req.params.categoryId },
    });

    res.status(200).json(subcategories);
  } catch (error) {
    res.statusMessage = error.message;
    return res.status(400).end();
  }
};

exports.createBillSubcategory = async (req, res) => {
  try {
    await GastoSubcategoria.create({
      descripcion: req.body.descripcion,
      GastoCategoriaId: req.body.categoryId,
      EmpresaId: req.usuarioEmpresaId,
    });

    res.status(200).json("subcategory created");
  } catch (error) {
    res.statusMessage = error.message;
    return res.status(400).end();
  }
};
