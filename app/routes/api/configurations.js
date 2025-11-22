const express = require("express");
const router = express.Router();
const ConfigurationController = require("../../controllers/ConfigurationController");

router.get("/", ConfigurationController.getConfigurations);

module.exports = router;
