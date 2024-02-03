const express = require("express");
const router = express.Router();
const PrecioController = require("../../controllers/PrecioController");

router.post("/:listPriceId", PrecioController.crearPrecio);
router.put("/", PrecioController.modificarPrecio);
router.get("/", PrecioController.traerPrecios);
router.delete("/", PrecioController.eliminarPrecio);

module.exports = router;
