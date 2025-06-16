const express = require("express");
const router = express.Router();
const SalesInventoryController = require("../../controllers/SalesInventoryController");

router.post("/:stockPointId?", SalesInventoryController.getSalesInventory);

module.exports = router;
