const express = require("express");
const router = express.Router();
const OrdenController = require("../../controllers/OrdenController");

router.get("/", OrdenController.traerOrdenes);
router.get("/:Id", OrdenController.traerOrden);
router.get("/finalizadas/:Dates", OrdenController.traerOrdenesFinalizadas);
router.get("/cliente/:IdCliente", OrdenController.traerOrdenesCliente);
router.post("/", OrdenController.crearOrden);
router.post("/simple", OrdenController.createOrderSimple);
router.put("/:Id", OrdenController.modificarOrden);
router.delete("/:Id", OrdenController.eliminarOrden);

module.exports = router;
