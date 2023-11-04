const { GastoCategoria } = require("../models/index");

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
