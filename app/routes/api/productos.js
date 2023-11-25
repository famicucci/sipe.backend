const express = require("express");
const router = express.Router();
const ProductoController = require("../../controllers/ProductoController");

router.get("/", ProductoController.traerProductos);
router.get(
  "/:stockPointId/:priceList",
  ProductoController.getProductsWithStockAndPrice
);
router.post("/", ProductoController.crearProducto);
router.put("/:ProductoCodigo", ProductoController.modificarProducto);
router.delete("/:ProductoCodigo", ProductoController.eliminarProducto);
router.get("/a-mover", ProductoController.traerProductosAMover);

module.exports = router;
