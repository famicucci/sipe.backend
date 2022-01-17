const {
	Factura,
	FacturaDetalle,
	Producto,
	Usuario,
	Cliente,
	Orden,
	OrdenEstado,
	Pago,
	MetodoPago,
} = require('../models/index');
const { sequelize } = require('../models/index');
const { Op } = require('sequelize');
const moment = require('moment');

exports.crearFactura = async (req, res) => {
	// rollback
	const t = await sequelize.transaction();

	try {
		const factura = await Factura.create(
			{
				observaciones: req.body.observaciones,
				estadoPago: req.body.estadoPago,
				importe: req.body.importe,
				descuento: req.body.descuento,
				tarifaEnvio: req.body.tarifaEnvio,
				importeFinal: req.body.importeFinal,
				tipo: req.body.tipo,
				estado: req.body.estado,
				ClienteId: req.body.ClienteId,
				OrdenId: req.body.OrdenId,
				UsuarioId: req.usuarioId,
				detalleFactura: req.body.detalleFactura,
			},
			{
				include: 'detalleFactura',
				transaction: t,
			}
		);
		await t.commit();
		res.status(200).json(factura);
	} catch (error) {
		await t.rollback();
		res.status(400).json(error);
	}
};

exports.modificarFactura = async (req, res) => {
	try {
		const factura = await Factura.update(
			{
				observaciones: req.body.observaciones,
				estadoPago: req.body.estadoPago,
				estado: req.body.estado,
			},
			{ where: { id: req.params.Id } }
		);

		if (factura) {
			res.status(200).send({
				msg: 'La factura ha sido modificada!',
				severity: 'success',
			});
		} else {
			res.status(400).send({
				msg: 'No se produjo ningún cambio en la base de datos',
				severity: 'error',
			});
		}
	} catch (error) {
		res.json(error);
	}
};

exports.cancelInvoice = async (req, res) => {
	const t = await sequelize.transaction();
	try {
		let paymentsTotalAmount = 0;

		const payments = await Pago.findAll({
			where: { FacturaId: req.params.Id },
		});

		if (payments) {
			payments.forEach((x) => {
				paymentsTotalAmount += parseFloat(x.importe);
			});
		}

		if (paymentsTotalAmount !== 0) {
			res.status(400).json({
				msg: 'This invoice has a created payment, please remove it',
				severity: 'error',
			});
			return;
		}

		// update invoice with => estadoPago: cancelado, tipo: nc, estado: c, OrdenId: null
		await Factura.update(
			{
				observaciones: req.body.observaciones,
				estadoPago: 'Cancelado',
				estado: 'c',
				OrdenId: null,
			},
			{ where: { id: req.params.Id }, transaction: t }
		);

		// get necessary data from current invoice
		const currentInvoice = await Factura.findOne({
			where: { id: req.params.Id },
		});

		let totalAmount = 0;
		let clientId;
		if (currentInvoice) {
			totalAmount = currentInvoice.importeFinal;
			clientId = currentInvoice.ClienteId;
		}

		await Factura.create(
			{
				observaciones: req.body.observaciones,
				estadoPago: 'Pago',
				tipo: 'nc',
				estado: 'v',
				OrdenId: null,
				importe: totalAmount,
				importeFinal: totalAmount,
				ClienteId: clientId,
				UsuarioId: req.usuarioId,
				tarifaEnvio: 0,
			},
			{ transaction: t }
		);

		await t.commit();
		res.json({
			msg: 'The invoice was canceled',
			severity: 'success',
		});

		// create a credit note with the same total value as current invoice
	} catch (error) {
		await t.rollback();
		res.status(400).json(error);
	}
};

// traer facturas de ordenes no finalizadas y no canceladas
exports.getInvoicing = async (req, res) => {
	const dates = JSON.parse(req.params.Dates);

	const startDate = moment(dates.startDate).subtract({
		hours: 3,
	});
	const endDate = moment(dates.endDate).add({
		hours: 21,
	});

	try {
		const facturas = await Factura.findAll({
			attributes: { exclude: ['UsuarioId', 'ClienteId'] },
			where: {
				createdAt: {
					[Op.between]: [startDate, endDate],
				},
			},
			include: [
				{
					model: FacturaDetalle,
					as: 'detalleFactura',
					attributes: { exclude: ['ProductoCodigo', 'FacturaId'] },
					include: {
						model: Producto,
						attributes: { exclude: ['EmpresaId'] },
					},
				},
				{ model: Usuario, attributes: ['usuario'] },
				{ model: Cliente, attributes: ['id', 'nombre', 'apellido'] },
				{
					model: Orden,
					attributes: [],
					include: [
						{
							model: OrdenEstado,
							attributes: ['descripcion'],
						},
					],
				},
			],
		});
		res.status(200).json(facturas);
	} catch (error) {
		res.json(error);
	}
};

// traer facturas de ordenes no finalizadas y no canceladas
exports.traerFacturasCliente = async (req, res) => {
	try {
		const facturas = await Factura.findAll({
			attributes: { exclude: ['UsuarioId', 'ClienteId'] },
			where: { ClienteId: req.params.Id },
			include: [
				{
					model: FacturaDetalle,
					as: 'detalleFactura',
					attributes: { exclude: ['ProductoCodigo', 'FacturaId'] },
					include: {
						model: Producto,
						attributes: { exclude: ['EmpresaId'] },
					},
				},
				{ model: Usuario, attributes: ['usuario'] },
				{ model: Cliente, attributes: ['id', 'nombre', 'apellido'] },
				{
					model: Orden,
					attributes: [],
					include: [
						{
							model: OrdenEstado,
							attributes: ['descripcion'],
						},
					],
				},
			],
		});
		res.status(200).json(facturas);
	} catch (error) {
		res.json(error);
	}
};
