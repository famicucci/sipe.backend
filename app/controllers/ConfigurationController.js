const { Configuration } = require("../models/index");

exports.getConfigurationsByCompany = async (req, res) => {
  try {
    const configurations = await Configuration.findAll({
      where: { EmpresaId: req.usuarioEmpresaId },
    });
    res.status(200).json(configurations);
  } catch (error) {
    res.status(400).json({
      error: "Error retrieving configurations",
      message: error.message,
    });
  }
};

exports.createConfiguration = async (req, res) => {
  try {
    const { name, type, value, EmpresaId } = req.body;
    const newConfiguration = await Configuration.create({
      name,
      type,
      value,
      EmpresaId,
    });
    res.status(201).json(newConfiguration);
  } catch (error) {
    res.status(400).json({
      error: "Error creating configuration",
      message: error.message,
    });
  }
};

exports.updateConfiguration = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    const [updated] = await Configuration.update(
      { value },
      { where: { id, EmpresaId: req.usuarioEmpresaId } }
    );

    if (updated === 0) {
      return res.status(404).json({ error: "Configuration not found" });
    }

    res.status(200).json({
      message: "Configuration updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: "Error updating configuration",
      message: error.message,
    });
  }
};

exports.deleteConfiguration = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedConfiguration = await Configuration.destroy({
      where: { id, EmpresaId: req.usuarioEmpresaId },
    });

    if (deletedConfiguration === 0) {
      return res.status(404).json({ error: "Configuration not found" });
    }

    res.status(200).json({ message: "Configuration deleted successfully" });
  } catch (error) {
    res.status(400).json({
      error: "Error deleting configuration",
      message: error.message,
    });
  }
};
