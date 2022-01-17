const { Usuario } = require('../models/index');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

exports.registroUsuario = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errores: errors.array() });
	}

	try {
		req.body.password = bcryptjs.hashSync(req.body.password, 10);
		const usuarios = await Usuario.create({
			nombre: req.body.nombre,
			password: req.body.password,
			usuario: req.body.usuario,
			rol: req.body.rol,
			EmpresaId: req.body.EmpresaId,
		});
		res.json({ success: 'Usuario creado' });
	} catch (error) {
		res.json(error);
	}
};

exports.loginUsuario = async (req, res) => {
	try {
		const usuario = await Usuario.findOne({
			where: { usuario: req.body.usuario },
		});
		if (usuario) {
			const iguales = bcryptjs.compareSync(req.body.password, usuario.password);

			if (iguales) {
				res.json({ success: createToken(usuario) });
			} else {
				res.status(400).send({ msj: 'Error en usuario y/o contraseña' });
			}
		} else {
			res.status(400).send({ msj: 'Error en usuario y/o contraseña' });
		}
	} catch (error) {
		res.json({ error });
	}
};

// modificar
exports.modificarUsuario = async (req, res) => {
	try {
		if (req.body.password) {
			req.body.password = bcryptjs.hashSync(req.body.password, 10);
		}

		if (req.body.rol !== undefined) {
			if (!req.usuarioRol) {
				res.json({
					error:
						'Este usuario no tiene los permisos necesarios para realizar esta acción',
				});
				return;
			}
		}

		const usuario = await Usuario.update(
			{
				password: req.body.password,
				rol: req.body.rol,
			},
			{
				where: { id: req.params.Id },
			}
		);

		// verifica si el update fue exitoso
		if (usuario[0]) {
			res.json({ success: 'El usuario ha sido modificado' });
		} else {
			res.json({ error: 'No se produjo ningún cambio' });
		}
	} catch (error) {
		res.json(error);
	}
};

// eliminar
exports.eliminarUsuario = async (req, res) => {
	try {
		const usuario = await Usuario.destroy({
			where: { id: req.params.Id },
		});

		if (usuario) {
			res.json({ success: 'Usuario eliminado' });
		} else {
			res.json({ error: 'No se produjo ningún cambio en la base de datos' });
		}
	} catch (error) {
		res.json(error);
	}
};

// traer todos los Usuarios
exports.traerUsuarios = async (req, res) => {
	try {
		const usuario = await Usuario.findAll();
		res.json(usuario);
	} catch (error) {
		res.json(error);
	}
};

// trae usuario autenticado
exports.usuarioAutenticado = async (req, res) => {
	try {
		const usuario = await Usuario.findByPk(req.usuarioId, {
			attributes: ['id', 'nombre', 'rol', 'usuario', 'EmpresaId'],
		});
		res.json({ usuario });
	} catch (error) {
		res.status(500).json({ msj: 'Hubo un error' });
	}
};

// funcion para crear el token de login
const createToken = (usuario) => {
	const payload = {
		usuarioId: usuario.id,
		usuarioRol: usuario.rol,
		usuarioEmpresaId: usuario.EmpresaId,
		createAt: moment().unix(),
		expiredAt: moment().add(24, 'hours').unix(),
	};
	return jwt.encode(payload, 'frase secreta');
};
