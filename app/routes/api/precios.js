const express = require('express');
const router = express.Router();
const PrecioController = require('../../controllers/PrecioController');

router.post('/', PrecioController.crearPrecio);
router.put('/', PrecioController.modificarPrecio);
router.get('/', PrecioController.traerPrecios);
router.delete('/', PrecioController.eliminarPrecio);

// traer listas de precio
router.get('/listas-precio', PrecioController.traerListasPrecio);

module.exports = router;
