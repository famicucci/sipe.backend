'use strict';
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldData = [
			{
				ID: '1',
				Descripcion: 'Showroom',
				Stock_Minimo: null,
				ID_Empresa: '1',
			},
			{
				ID: '2',
				Descripcion: 'Despósito',
				Stock_Minimo: null,
				ID_Empresa: '1',
			},
			{
				ID: '3',
				Descripcion: 'Mercado Libre',
				Stock_Minimo: null,
				ID_Empresa: '1',
			},
			{
				ID: '6',
				Descripcion: 'Outlet',
				Stock_Minimo: null,
				ID_Empresa: '1',
			},
		];
		let ptosStocks = oldData.map((x) => ({
			id: x.ID,
			descripcion: x.Descripcion,
			stockMin: x.Stock_Minimo,
			EmpresaId: x.ID_Empresa,
		}));
		await queryInterface.bulkInsert('ptostock', ptosStocks, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('ptostock', null, {});
	},
};
