const { MetodoPago } = require('../models/index');

exports.traerMetodosPago = async (req, res) => {
	try {
		const metodosPago = await MetodoPago.findAll({
			attributes: ['id', 'descripcion'],
			where: { EmpresaId: req.usuarioEmpresaId },
		});
		res.status(200).json(metodosPago);
	} catch (error) {
		res.json(error);
	}
};
