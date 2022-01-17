'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldData = [
			{
				ID: '1',
				Descripcion: 'Showroom',
				ID_Empresa: '1',
				ID_Pto_Stock: '1',
			},
			{
				ID: '2',
				Descripcion: 'Banfield',
				ID_Empresa: '1',
				ID_Pto_Stock: '2',
			},
		];
		let ptosVenta = oldData.map((x) => ({
			id: x.ID,
			descripcion: x.Descripcion,
			EmpresaId: x.ID_Empresa,
			PtoStockId: x.ID_Pto_Stock,
		}));
		await queryInterface.bulkInsert('ptoventa', ptosVenta, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('ptoventa', null, {});
	},
};
