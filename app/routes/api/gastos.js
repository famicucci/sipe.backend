const express = require('express');
const router = express.Router();
const GastoController = require('../../controllers/GastoController');

router.get('/categorias', GastoController.traerCategorias);
router.get('/subcategorias', GastoController.traerSubcategorias);
router.post('/', GastoController.crearGasto);
router.get('/:Dates', GastoController.traerGastos);
router.put('/:Id', GastoController.modificarGasto);
router.delete('/:Id', GastoController.eliminarGasto);

module.exports = router;
