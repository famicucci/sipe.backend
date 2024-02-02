const express = require("express");
const router = express.Router();
const ListaPrecioController = require("../../controllers/ListaPrecioController");

router.get("/", ListaPrecioController.getPriceLists);
router.get("/:id", ListaPrecioController.getPriceList);
router.post("/", ListaPrecioController.createPriceList);
router.delete("/:id", ListaPrecioController.deletePriceList);

module.exports = router;
