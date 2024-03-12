const express = require("express");
const router = express.Router();
const PointsOfSaleController = require("../../controllers/PointsOfSaleController");

router.get("/", PointsOfSaleController.getPointsOfSale);
router.post("/", PointsOfSaleController.createPointOfSale);

module.exports = router;
