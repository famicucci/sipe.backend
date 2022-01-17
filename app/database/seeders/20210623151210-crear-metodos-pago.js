'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let metodosPago = [
			{
				descripcion: 'Mercado Pago',
				EmpresaId: '1',
			},
			{
				descripcion: 'Efectivo',
				EmpresaId: '1',
			},
			{
				descripcion: 'Transferencia',
				EmpresaId: '1',
			},
		];
		await queryInterface.bulkInsert('metodopago', metodosPago, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('metodopago', null, {});
	},
};
