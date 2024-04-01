const express = require("express");
const router = express.Router();
const ProductoController = require("../../controllers/ProductoController");

router.get("/", ProductoController.traerProductos);
router.post("/", ProductoController.crearProducto);
router.delete("/:ProductoCodigo", ProductoController.eliminarProducto);
router.get("/:stockPointId?", ProductoController.getProductsWithStockAndPrice);
router.put("/:ProductoCodigo", ProductoController.modificarProducto);
router.get("/a-mover", ProductoController.traerProductosAMover);

module.exports = router;
