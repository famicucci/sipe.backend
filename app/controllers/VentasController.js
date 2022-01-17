const {
	Stock,
	PtoStock,
	PtoVenta,
	Producto,
	Precio,
	TipoEnvio,
} = require('../models/index');
const { sequelize } = require('../models/index');

// traer stock total y precios
exports.traerStockTotal = async (req, res) => {
	try {
		const stocks = await Stock.findAll({
			attributes: [
				'ProductoCodigo',
				[sequelize.fn('sum', sequelize.col('cantidad')), 'cantidad'],
			],
			include: [
				{
					model: Producto,
					attributes: ['descripcion'],
					where: { EmpresaId: req.usuarioEmpresaId },
					include: { model: Precio, attributes: ['id', 'pu', 'ListaPrecioId'] },
				},
			],
			group: ['Producto.Precios.id'],
			raw: true,
		});
		res.status(200).json(stocks);
	} catch (error) {
		res.json(error);
	}
};

// traer stock por punto de stock y precios
exports.traerStockPtoStock = async (req, res) => {
	try {
		const stocks = await Stock.findAll({
			attributes: ['cantidad', 'ProductoCodigo', 'PtoStockId'],
			include: [
				{
					model: Producto,
					attributes: ['descripcion'],
					where: { EmpresaId: req.usuarioEmpresaId },
					include: { model: Precio, attributes: ['pu', 'ListaPrecioId'] },
				},
				{ model: PtoStock, attributes: ['descripcion'] },
			],

			raw: true,
		});
		res.json(stocks);
	} catch (error) {
		res.status(500).send({ msg: 'Hubo un error' });
	}
};

// traer puntos de venta
exports.traerPtosVenta = async (req, res) => {
	try {
		const ptosVenta = await PtoVenta.findAll({
			where: { EmpresaId: req.usuarioEmpresaId },
			include: { model: PtoStock, attributes: ['descripcion'] },
			raw: true,
		});
		res.status(200).json(ptosVenta);
	} catch (error) {
		res.json(error);
	}
};

// traer puntos de venta
exports.traerTiposEnvio = async (req, res) => {
	try {
		const tiposEnvio = await TipoEnvio.findAll({
			attributes: ['id', 'descripcion'],
			where: { EmpresaId: req.usuarioEmpresaId },
			// include: { model: PtoStock, attributes: ['descripcion'] },
			// raw: true,
		});
		res.status(200).json(tiposEnvio);
	} catch (error) {
		res.json(error);
	}
};
