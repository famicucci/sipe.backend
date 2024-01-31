const express = require("express");
const router = express.Router();
const ListaPrecioController = require("../../controllers/ListaPrecioController");

router.get("/", ListaPrecioController.getPriceLists);
router.post("/", ListaPrecioController.createPriceList);
router.delete("/:id", ListaPrecioController.deletePriceList);

module.exports = router;
