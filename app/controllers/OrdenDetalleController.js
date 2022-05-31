const {
	OrdenDetalle,
	Stock,
	MovimientoStock,
	Factura,
} = require('../models/index');
const { sequelize } = require('../models/index');

// create a new controller for edit order
exports.modificarDetalleOrden = async (req, res) => {
	const t = await sequelize.transaction();

	try {
		// check if current order has an invoice
		const invoice = await Factura.findOne({
			where: { OrdenId: req.params.OrdenId },
		});

		if (invoice) {
			await t.rollback();
			res.status(400).send({
				msg: `The order has a valid invoice`,
				severity: 'error',
			});
			return;
		}

		// get current products
		const currentProducts = await OrdenDetalle.findAll({
			where: { OrdenId: req.params.OrdenId },
		});

		// destroy current products
		await OrdenDetalle.destroy({
			where: { OrdenId: req.params.OrdenId },
			transaction: t,
		});

		// add current products quantitys to stock
		const restablishStock = async () => {
			for (x of currentProducts) {
				if (x.PtoStockId)
					await Stock.increment(
						{ cantidad: x.cantidad },
						{
							transaction: t,
							where: {
								ProductoCodigo: x.ProductoCodigo,
								PtoStockId: x.PtoStockId,
							},
						}
					);
			}
			return;
		};
		await restablishStock();
		await t.commit();

		const t2 = await sequelize.transaction();
		try {
			// check if all products are available (if not do a rollback)
			const productStocks = await Stock.findAll();
			for (x of req.body) {
				for (y of productStocks) {
					if (
						x.ProductoCodigo === y.ProductoCodigo &&
						x.PtoStockId === y.PtoStockId
					) {
						if (y.cantidad - x.cantidad < 0) {
							await t2.rollback();
							res.status(400).send({
								msg: `El producto ${x.ProductoCodigo} no tiene stock suficiente`,
								severity: 'error',
							});
							return;
						}
					}
				}
			}

			// create new order detail
			await OrdenDetalle.bulkCreate(req.body, {
				transaction: t2,
			});

			// remove quantitys from stock
			for (x of req.body) {
				if (x.PtoStockId)
					await Stock.decrement(
						{ cantidad: x.cantidad },
						{
							transaction: t2,
							where: {
								ProductoCodigo: x.ProductoCodigo,
								PtoStockId: x.PtoStockId,
							},
						}
					);
			}

			// finally create corresponding rows in stock movement
			let currentProductsToNegative = [];
			currentProducts.forEach((n) => {
				n.cantidad = -n.cantidad;
				currentProductsToNegative.push(n);
			});
			const mergeToMovements = [...currentProductsToNegative, ...req.body];

			let movements = {};
			mergeToMovements.forEach((x) => {
				if (x.PtoStockId) {
					const id = `${x.ProductoCodigo}${x.PtoStockId}`;
					movements[id] = movements[id] ?? {
						cantidad: 0,
						motivo: 'M. Venta',
						ProductoCodigo: x.ProductoCodigo,
						PtoStockId: x.PtoStockId,
						UsuarioId: req.usuarioId,
					};
					movements[id]['cantidad'] += x.cantidad;
				}
			});

			await MovimientoStock.bulkCreate(
				Object.values(movements).filter((x) => x.cantidad !== 0),
				{
					transaction: t2,
				}
			);

			await t2.commit();
			// res.json(productStocks);
			res.json({ msg: 'Orden modificada', severity: 'success' });
		} catch (error) {
			// res.status(400).send('hola como está');
			console.log(error);
			res.status(400).json(error);
			await t2.rollback();
		}
	} catch (error) {
		// res.status(400).send('hola como está');
		console.log(error);
		res.status(400).json(error);
		await t.rollback();
	}
};
