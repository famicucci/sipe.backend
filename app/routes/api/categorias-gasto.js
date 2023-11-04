const express = require("express");
const router = express.Router();
const BillCategoriesController = require("../../controllers/BillCategoriesController");

router.get("/", BillCategoriesController.getBillCategories);

module.exports = router;
