'use strict';
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldData = [
			{
				ID: '1',
				Descripcion: 'Lista Minorista',
				Fecha: '2021-02-15 17:00:00',
				Estado: 'Vigente',
				ID_Empresa: '1',
			},
			{
				ID: '2',
				Descripcion: 'Lista Mayorista',
				Fecha: '2021-02-15 17:00:00',
				Estado: 'Vigente',
				ID_Empresa: '1',
			},
		];
		let precioListas = oldData.map((x) => ({
			descripcion: x.Descripcion,
			estado: x.Estado,
			EmpresaId: x.ID_Empresa,
			createdAt: moment().format(),
		}));
		await queryInterface.bulkInsert('listaprecio', precioListas, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('listaprecio', null, {});
	},
};
