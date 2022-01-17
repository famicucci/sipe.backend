'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let ptosVenta = [
			{
				descripcion: 'Showroom',
				EmpresaId: '1',
				PtoStockId: 1,
			},
			{
				descripcion: 'Depósito',
				EmpresaId: '1',
				PtoStockId: 2,
			},
		];
		await queryInterface.bulkInsert('ptoventa', ptosVenta, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('ptoventa', null, {});
	},
};
