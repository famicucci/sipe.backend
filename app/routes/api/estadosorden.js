const express = require('express');
const router = express.Router();
const OrdenEstadoController = require('../../controllers/OrdenEstadoController');

router.get('/', OrdenEstadoController.traerEstadosOrden);

module.exports = router;
