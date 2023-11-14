const express = require("express");
const router = express.Router();
const FacturaController = require("../../controllers/FacturaController");

router.get("/:id", FacturaController.getInvoice);
router.post("/", FacturaController.createInvoice);
router.get("/:Dates", FacturaController.getInvoicing);
router.get("/cliente/:Id", FacturaController.traerFacturasCliente);
router.put("/:Id", FacturaController.modificarFactura);
router.patch("/:Id", FacturaController.cancelInvoice);

module.exports = router;
