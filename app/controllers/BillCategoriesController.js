const { GastoCategoria, GastoSubcategoria } = require("../models/index");

exports.getBillCategories = async (req, res) => {
  try {
    const categories = await GastoCategoria.findAll({
      attributes: ["id", "descripcion"],
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
