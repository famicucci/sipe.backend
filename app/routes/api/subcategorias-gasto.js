const express = require("express");
const router = express.Router();
const BillSubcategoriesController = require("../../controllers/BillSubcategoriesController");

router.get("/:categoryId", BillSubcategoriesController.getBillSubcategories);
router.post("/", BillSubcategoriesController.createBillSubcategory);
router.delete("/:id", BillSubcategoriesController.deleteBillSubcategory);

module.exports = router;
