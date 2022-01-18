const { Precio, Producto, ListaPrecio } = require('../models/index');

exports.crearPrecio = async (req, res) => {
	// { ProductoCodigo: req.body.ProductoCodigo,
	// ListaPrecioId: req.body.ListaPrecioId,
	// pu: req.body.pu }
	try {
		const precio = await Precio.bulkCreate(req.body);
		res.json(precio);
	} catch (error) {
		res.json(error);
	}
};

exports.modificarPrecio = async (req, res) => {
	// [{
	// 	pu: req.body.pu,
	// 	ProductoCodigo: req.body.ProductoCodigo,
	// 	ListaPrecioId: req.body.ListaPrecioId
	// }]

	try {
		for (const element of req.body) {
			await Precio.update(
				{
					pu: element.pu,
				},
				{
					where: {
						ProductoCodigo: element.ProductoCodigo,
						ListaPrecioId: element.ListaPrecioId,
					},
				}
			);
		}

		res.json({ success: 'Precios Modificados' });
	} catch (error) {
		res.json({ error: 'Ocurrió un error' });
	}
};

exports.traerPrecios = async (req, res) => {
	try {
		const precios = await Precio.findAll({
			include: [
				{
					model: Producto,
					attributes: ['descripcion'],
					where: { EmpresaId: req.usuarioEmpresaId },
				},
			],
			raw: true,
		});

		res.json(precios);
	} catch (error) {
		res.status(400).send(error);
	}
};

// eliminar
exports.eliminarPrecio = async (req, res) => {
	try {
		const precio = await Precio.destroy({
			where: {
				ProductoCodigo: req.body.ProductoCodigo,
				ListaPrecioId: req.body.ListaPrecioId,
			},
		});

		if (precio) {
			res.json({ success: 'Precio eliminado' });
		} else {
			res.json({ error: 'No se produjo ningún cambio en la base de datos' });
		}
	} catch (error) {
		res.json({ error: 'Ocurrió un error' });
	}
};

// traer listas de precio
exports.traerListasPrecio = async (req, res) => {
	console.log(req.body);
	try {
		const precios = await ListaPrecio.findAll({
			where: { EmpresaId: req.usuarioEmpresaId },
		});

		res.status(200).json(precios);
	} catch (error) {
		res.status(400).send(error);
	}
};
