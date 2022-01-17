const { Producto, PtoStock, Empresa } = require('../models/index');
const { sequelize } = require('../models/index');
const { QueryTypes } = require('sequelize');

exports.traerProductos = async (req, res) => {
	try {
		const productos = await Producto.findAll({
			attributes: ['codigo', 'descripcion'],
			where: { EmpresaId: req.usuarioEmpresaId },
		});
		res.json(productos);
	} catch (error) {
		res.json(error);
	}
};

exports.crearProducto = async (req, res) => {
	// consultar en bd los puntos de stock de la empresa
	const ptosStock = await PtoStock.findAll(
		{
			attributes: ['id'],
			include: [
				{
					model: Empresa,
					attributes: [],
					where: { id: req.usuarioEmpresaId },
				},
			],
		},
		{}
	);

	let stockIniciales = [];
	ptosStock.forEach((ptoStock) => {
		const stockInicial = {
			cantidad: 0,
			PtoStockId: ptoStock.id,
			ProductoCodigo: req.body.codigo,
		};
		stockIniciales.push(stockInicial);
	});

	// rollback
	const t = await sequelize.transaction();

	try {
		const producto = await Producto.create(
			{
				codigo: req.body.codigo,
				descripcion: req.body.descripcion,
				EmpresaId: req.usuarioEmpresaId,
				stockProducto: stockIniciales,
			},
			{
				include: 'stockProducto',
				transaction: t,
			}
		);
		await t.commit();
		res.json(producto);
	} catch (error) {
		await t.rollback();
		res.json(error);
		// res.json({ error: 'Un error ha ocurrido' });
	}
};

exports.modificarProducto = async (req, res) => {
	try {
		const producto = await Producto.update(
			{
				codigo: req.body.codigo,
				descripcion: req.body.descripcion,
			},
			{
				where: { codigo: req.params.ProductoCodigo },
			}
		);

		// verifica si el update fue exitoso
		if (producto[0]) {
			res.json({ success: 'El producto ha sido modificado' });
		} else {
			res.json({ error: 'No se produjo ningún cambio en la base de datos' });
		}
	} catch (error) {
		res.json({ error: 'Ocurrió un error' });
	}
};

// eliminar
exports.eliminarProducto = async (req, res) => {
	try {
		const producto = await Producto.destroy({
			where: { codigo: req.params.ProductoCodigo },
		});

		if (producto) {
			res.json({ success: 'Producto eliminado' });
		} else {
			res.json({ error: 'No se produjo ningún cambio en la base de datos' });
		}
	} catch (error) {
		res.json(error);
	}
};

exports.traerProductosAMover = async (req, res) => {
	try {
		// const id = 2;
		const productos = await sequelize.query(
			`SELECT ordendetalle.ProductoCodigo, producto.descripcion, ordendetalle.cantidad, ordendetalle.PtoStockId AS ID_Pto_Stock_Producto , pto_stock_producto.descripcion AS Pto_Stock_Producto_Descripcion, ptoventa.PtoStockId AS ID_Pto_Stock_De_Pto_Venta, pto_stock_pto_venta.Descripcion AS Pto_Stock_Pto_Venta_Descripcion
			FROM ordendetalle 
			INNER JOIN producto ON ordendetalle.ProductoCodigo = producto.codigo
			INNER JOIN orden ON ordendetalle.OrdenId = orden.id
			INNER JOIN ptoventa ON orden.PtoVentaId = ptoventa.id
			INNER JOIN ptostock AS pto_stock_producto ON ordendetalle.PtoStockId = pto_stock_producto.id
			INNER JOIN ptostock AS pto_stock_pto_venta ON ptoventa.PtoStockId = pto_stock_pto_venta.id
			WHERE ordendetalle.origen = 'Disponible'
			AND (orden.OrdenEstadoId != '11')
			AND ordendetalle.PtoStockId != ptoventa.PtoStockId
			AND producto.EmpresaId = '1'`,
			{
				type: QueryTypes.SELECT,
			}
		);

		res.json(productos);
	} catch (error) {
		res.json(error);
	}
};
