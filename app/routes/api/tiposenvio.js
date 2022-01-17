const express = require('express');
const router = express.Router();
const TipoEnvioController = require('../../controllers/TipoEnvioController');

router.get('/', TipoEnvioController.traerTiposEnvio);
router.post('/', TipoEnvioController.crearTipoEnvio);
router.put('/:Id', TipoEnvioController.modificarTipoEnvio);
router.delete('/:Id', TipoEnvioController.eliminarTipoEnvio);

module.exports = router;
