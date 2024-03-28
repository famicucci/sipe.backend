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
