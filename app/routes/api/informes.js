const express = require("express");
const router = express.Router();
const InformesController = require("../../controllers/InformesController");

router.get("/ingresos-brutos", InformesController.traerIngresosBrutos);
router.get("/incomes-by-months", InformesController.getIncomesByMonths);
router.get("/expenses-by-months", InformesController.getExpensesByMonths);
router.get("/expenses/:categoryId", InformesController.getExpensesByCategory);
router.get("/high-revenue-products", InformesController.highRevenueProducts);

module.exports = router;
