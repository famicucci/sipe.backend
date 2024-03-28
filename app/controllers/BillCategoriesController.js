const { GastoCategoria, GastoSubcategoria } = require("../models/index");

exports.getBillCategories = async (req, res) => {
  try {
    const categories = await GastoCategoria.findAll({
      attributes: ["id", "descripcion"],
      where: { EmpresaId: req.usuarioEmpresaId },
    });

    res.json(categories);
  } catch (error) {
    res.json(error);
  }
};

exports.getBillSubcategories = async (req, res) => {
  try {
    const subcategories = await GastoSubcategoria.findAll({
      attributes: ["id", "descripcion"],
      where: {
        ["GastoCategoriaId"]: req.params.category_id,
      },
    });

    res.json(subcategories);
  } catch (error) {
    res.json(error);
  }
};

exports.createBillCategory = async (req, res) => {
  try {
    await GastoCategoria.create({
      descripcion: req.body.descripcion,
      EmpresaId: req.usuarioEmpresaId,
    });

    res.status(200).json("category created");
  } catch (error) {
    res.statusMessage = error.message;
    return res.status(400).end();
  }
};

exports.deleteBillCategory = async (req, res) => {
  try {
    await GastoCategoria.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json("category deleted");
  } catch (error) {
    res.statusMessage = error.message;
    return res.status(400).end();
  }
};
