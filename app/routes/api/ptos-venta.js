const express = require("express");
const router = express.Router();
const PointsOfSaleController = require("../../controllers/PointsOfSaleController");

router.get("/", PointsOfSaleController.getPointsOfSale);

module.exports = router;
