'use strict';
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let gastos = [
			{
				descripcion: 'Flete de colchones',
				estado: 'Pago',
				importe: 895,
				createdAt: moment().format(),
				updatedAt: moment().format(),
				UsuarioId: 1,
				GastoCategoriaId: 4,
				GastoSubcategoriaId: 6,
				EmpresaId: '1',
			},
			{
				descripcion: 'Telas',
				estado: 'Pendiente',
				importe: 15000,
				createdAt: moment().format(),
				updatedAt: moment().format(),
				UsuarioId: 2,
				GastoCategoriaId: 3,
				GastoSubcategoriaId: 4,
				EmpresaId: '1',
			},
			{
				descripcion: 'Hojas de papel',
				estado: 'Pago',
				importe: 1560,
				createdAt: moment().format(),
				updatedAt: moment().format(),
				UsuarioId: 4,
				GastoCategoriaId: 3,
				GastoSubcategoriaId: 8,
				EmpresaId: '1',
			},
			{
				descripcion: 'Sueldo de Yazmín',
				estado: 'Pago',
				importe: 40000,
				createdAt: moment().format(),
				updatedAt: moment().format(),
				UsuarioId: 3,
				GastoCategoriaId: 1,
				GastoSubcategoriaId: 1,
				EmpresaId: '1',
			},
		];
		await queryInterface.bulkInsert('gasto', gastos, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('gasto', null, {});
	},
};
