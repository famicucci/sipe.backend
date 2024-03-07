const express = require("express");
const router = express.Router();
const MetodoPagoController = require("../../controllers/MetodoPagoController");

router.get("/", MetodoPagoController.traerMetodosPago);
router.post("/", MetodoPagoController.createPaymentMethod);
router.delete("/:id", MetodoPagoController.deletePaymentMethod);

module.exports = router;
