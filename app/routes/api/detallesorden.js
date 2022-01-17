const express = require('express');
const router = express.Router();
const OrdenDetalleController = require('../../controllers/OrdenDetalleController');

router.put('/:OrdenId', OrdenDetalleController.modificarDetalleOrden);

module.exports = router;
