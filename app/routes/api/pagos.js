const express = require("express");
const router = express.Router();
const PagoController = require("../../controllers/PagoController");

router.get("/:invoiceId", PagoController.getPayments);
router.post("/", PagoController.crearPago);
router.patch("/:Id", PagoController.cancelPayment);

module.exports = router;
