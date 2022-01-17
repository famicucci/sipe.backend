const axios = require('axios');
const accessToken = '79391b0c9402d23f0a37ba9e912cbb85fa2ab48b';
const apiUrl = 'https://api.tiendanube.com';

const tiendaNubeAxios = axios.create({
	baseURL: apiUrl,
	headers: {
		Authentication: `bearer ${accessToken}`,
		'User-Agent': 'API para Sip (famicucci@email.com)',
		'Content-Type': 'application/json',
	},
});

exports.traerProductos = async (req, res) => {
	try {
		const r = await tiendaNubeAxios.get('/v1/1894966/products');
		res.status(200).json(r.data);
	} catch (error) {
		res.status(400).json(error);
	}
};

exports.modificarStock = async (req, res) => {
	const product = req.params.ProductId;
	const variant = req.params.VariantId;
	const qty = req.body.qty;

	try {
		const r = await tiendaNubeAxios.put(
			`/v1/1894966/products/${product}/variants/${variant}`,
			{ stock: qty }
		);

		res.status(200).json(r.data);
	} catch (error) {
		res.status(400).json(error);
	}
};

exports.traerOrdenes = async (req, res) => {
	try {
		const r = await tiendaNubeAxios.get('/v1/1894966/orders');
		res.status(200).json(r.data);
	} catch (error) {
		res.status(400).json(error);
	}
};

exports.traerOrden = async (req, res) => {
	try {
		const r = await tiendaNubeAxios.get(`/v1/1894966/orders/${req.params.Id}`);
		res.status(200).json(r.data);
	} catch (error) {
		res.status(400).json(error);
	}
};

exports.closeOrder = async (req, res) => {
	try {
		const r = await tiendaNubeAxios.post(
			`/v1/1894966/orders/${req.params.Id}/close`
		);
		res.status(200).json(r.data);
	} catch (error) {
		res.status(400).json(error);
	}
};
