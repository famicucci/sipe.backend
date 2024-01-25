const express = require("express");
const router = express.Router();
const PointsOfStockController = require("../../controllers/PointsOfStockController");

router.get("/", PointsOfStockController.getPointsOfStock);

module.exports = router;
