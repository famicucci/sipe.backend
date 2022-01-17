'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldData = [
			{
				ID: '1',
				Descripcion: 'Mercado Pago',
				ID_Empresa: '1',
			},
			{
				ID: '2',
				Descripcion: 'Efectivo',
				ID_Empresa: '1',
			},
			{
				ID: '3',
				Descripcion: 'Transferencia',
				ID_Empresa: '1',
			},
		];
		let metodosPago = oldData.map((x) => ({
			id: x.ID,
			descripcion: x.Descripcion,
			EmpresaId: x.ID_Empresa,
		}));
		await queryInterface.bulkInsert('metodopago', metodosPago, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('metodopago', null, {});
	},
};
