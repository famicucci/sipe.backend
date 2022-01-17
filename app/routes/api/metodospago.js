const express = require('express');
const router = express.Router();
const MetodoPagoController = require('../../controllers/MetodoPagoController');

router.get('/', MetodoPagoController.traerMetodosPago);

module.exports = router;
