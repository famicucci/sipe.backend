'use strict';
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let ptosStocks = [
			{
				descripcion: 'Showroom',
				EmpresaId: 1,
			},
			{
				descripcion: 'Depósito',
				EmpresaId: 1,
			},
			{
				descripcion: 'Outlet',
				EmpresaId: 1,
			},
			{
				descripcion: 'Mercado Libre',
				EmpresaId: 1,
			},
		];
		await queryInterface.bulkInsert('ptostock', ptosStocks, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('ptostock', null, {});
	},
};
