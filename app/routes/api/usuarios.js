const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const middlewares = require('../middlewares');
const UsuarioController = require('../../controllers/UsuarioController');

// registro
router.post(
	'/registro',
	[
		check('nombre', 'El nombre y apellido son obligatorios').not().isEmpty(),
		check('password', 'El password es obligatorio').not().isEmpty(),
		check('usuario', 'El usuario es obligatorio').not().isEmpty(),
		check('rol', 'El rol de usuario es obligatorio').not().isEmpty(),
		check('EmpresaId', 'El nombre de la empresa es obligatorio')
			.not()
			.isEmpty(),
	],
	UsuarioController.registroUsuario
);

// login
router.post('/login', UsuarioController.loginUsuario);
router.put('/:Id', middlewares.checkToken, UsuarioController.modificarUsuario);
router.delete(
	'/:Id',
	middlewares.checkToken,
	UsuarioController.eliminarUsuario
);

router.get('/', middlewares.checkToken, UsuarioController.traerUsuarios);
router.get(
	'/usuario-autenticado',
	middlewares.checkToken,
	UsuarioController.usuarioAutenticado
);

module.exports = router;
