const express = require("express");
const router = express.Router();
const OrdenEstadoController = require("../../controllers/OrdenEstadoController");

router.get("/", OrdenEstadoController.traerEstadosOrden);
router.post("/", OrdenEstadoController.createStatusOrder);

module.exports = router;
