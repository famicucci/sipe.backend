const express = require("express");
const router = express.Router();
const BillCategoriesController = require("../../controllers/BillCategoriesController");

router.get("/", BillCategoriesController.getBillCategories);
router.get(
  "/:category_id/subcategories",
  BillCategoriesController.getBillSubcategories
);

module.exports = router;
