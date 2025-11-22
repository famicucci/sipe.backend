const express = require("express");
const router = express.Router();
const ConfigurationController = require("../../controllers/ConfigurationController");

router.get("/:companyId", ConfigurationController.getConfigurationsByCompany);
router.post("/", ConfigurationController.createConfiguration);
router.patch("/:id", ConfigurationController.updateConfiguration);
router.delete("/:id", ConfigurationController.deleteConfiguration);

module.exports = router;
