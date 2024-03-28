const express = require("express");
const router = express.Router();
const BillSubcategoriesController = require("../../controllers/BillSubcategoriesController");

router.get("/:categoryId", BillSubcategoriesController.getBillSubcategories);

module.exports = router;
