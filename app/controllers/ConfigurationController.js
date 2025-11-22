const { Configuration } = require("../models/index");

exports.getConfigurations = async (req, res) => {
  try {
    const configurations = await Configuration.findAll();
    res.status(200).json(configurations);
  } catch (error) {
    res.status(400).json({
      error: "Error retrieving configurations",
      message: error.message,
    });
  }
};
