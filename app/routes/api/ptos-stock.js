const express = require("express");
const router = express.Router();
const PointsOfStockController = require("../../controllers/PointsOfStockController");

router.get("/", PointsOfStockController.getPointsOfStock);
router.post("/", PointsOfStockController.createPointOfStock);
router.delete("/:id", PointsOfStockController.deleteStockOfPoint);

module.exports = router;
