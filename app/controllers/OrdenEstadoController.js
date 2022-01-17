const { OrdenEstado } = require('../models/index');

exports.traerEstadosOrden = async (req, res) => {
	try {
		const estadosOrden = await OrdenEstado.findAll({
			attributes: { exclude: ['EmpresaId'] },
			where: { EmpresaId: req.usuarioEmpresaId },
		});
		res.status(200).json(estadosOrden);
	} catch (error) {
		res.json(error);
	}
};
