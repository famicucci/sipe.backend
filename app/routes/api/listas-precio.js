const express = require("express");
const router = express.Router();
const ListaPrecioController = require("../../controllers/ListaPrecioController");

router.get("/", ListaPrecioController.getPriceLists);

module.exports = router;
