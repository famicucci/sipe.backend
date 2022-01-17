const { Cliente, Direccion } = require('../models/index');

exports.crearCliente = async (req, res) => {
	try {
		const cliente = await Cliente.create({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			observaciones: req.body.observaciones,
			instagram: req.body.instagram,
			facebook: req.body.facebook,
			celular: req.body.celular,
			email: req.body.email,
			mascota: req.body.mascota,
			tipo: req.body.tipo,
			dni: req.body.dni,
			razonSocial: req.body.razonSocial,
			condIva: req.body.condIva,
			EmpresaId: req.usuarioEmpresaId,
		});
		res.status(200).json(cliente);
	} catch (error) {
		res.json(error);
	}
};

exports.modificarCliente = async (req, res) => {
	try {
		const cliente = await Cliente.update(
			{
				nombre: req.body.nombre,
				apellido: req.body.apellido,
				observaciones: req.body.observaciones,
				instagram: req.body.instagram,
				facebook: req.body.facebook,
				celular: req.body.celular,
				email: req.body.email,
				mascota: req.body.mascota,
				tipo: req.body.tipo,
				dni: req.body.dni,
				razonSocial: req.body.razonSocial,
				condIva: req.body.condIva,
			},
			{ where: { id: req.params.Id, EmpresaId: req.usuarioEmpresaId } }
		);

		// verifica si el update fue exitoso
		if (cliente[0]) {
			res
				.status(200)
				.send({ msg: 'El cliente ha sido modificado!', severity: 'success' });
		} else {
			res
				.status(200)
				.send({ error: 'No se produjo ningún cambio en la base de datos' });
		}
	} catch (error) {
		res.status(400).send({ error: 'Hubo un error', severity: 'error' });
	}
};

exports.traerClientes = async (req, res) => {
	try {
		const clientes = await Cliente.findAll({
			attributes: [
				'id',
				'nombre',
				'apellido',
				'observaciones',
				'instagram',
				'facebook',
				'celular',
				'email',
				'mascota',
				'tipo',
				'dni',
				'razonSocial',
				'condIva',
				'createdAt',
				'updatedAt',
			],
			include: {
				model: Direccion,
				as: 'direcciones',
				attributes: { exclude: ['ClienteId'] },
			},
		});

		res.json(clientes);
	} catch (error) {
		res.json(error);
	}
};

exports.traerCliente = async (req, res) => {
	console.log(req.params.Email);
	try {
		const clientes = await Cliente.findAll({
			attributes: [
				'id',
				'nombre',
				'apellido',
				'observaciones',
				'instagram',
				'facebook',
				'celular',
				'email',
				'mascota',
				'tipo',
				'dni',
				'razonSocial',
				'condIva',
				'createdAt',
				'updatedAt',
			],
			include: {
				model: Direccion,
				as: 'direcciones',
				attributes: { exclude: ['ClienteId'] },
			},
			where: { email: req.params.Email },
		});

		res.json(clientes);
	} catch (error) {
		res.json(error);
	}
};

exports.eliminarCliente = async (req, res) => {
	try {
		const cliente = await Cliente.destroy({
			where: { id: req.params.Id, EmpresaId: req.usuarioEmpresaId },
		});

		// verifica si el update fue exitoso
		if (cliente) {
			res
				.status(200)
				.send({ msg: 'El cliente ha sido eliminado!', severity: 'success' });
		} else {
			res
				.status(400)
				.send({ error: 'No se produjo ningún cambio en la base de datos' });
		}
	} catch (error) {
		res.json(error);
	}
};
