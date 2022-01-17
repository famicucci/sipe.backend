'use strict';
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let precioListas = [
			{
				descripcion: 'Lista Minorista',
				estado: 'Vigente',
				EmpresaId: '1',
				createdAt: moment().format(),
			},
			{
				descripcion: 'Lista Mayorista',
				estado: 'Vigente',
				EmpresaId: '1',
				createdAt: moment().format(),
			},
			{
				descripcion: 'Lista Minorista',
				estado: 'Vigente',
				EmpresaId: '2',
				createdAt: moment().format(),
			},
			{
				descripcion: 'Lista Mayorista',
				estado: 'No vigente',
				EmpresaId: '2',
				createdAt: moment().format(),
			},
		];
		await queryInterface.bulkInsert('listaprecio', precioListas, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('listaprecio', null, {});
	},
};
