'use strict';
const bcryptjs = require('bcryptjs');
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let usuarios = [
			{
				nombre: 'Francisco Agustín Micucci',
				password: bcryptjs.hashSync('123456', 10),
				usuario: 'famicucci',
				rol: 1,
				EmpresaId: 1,
				createdAt: moment().format(),
			},
			{
				nombre: 'admin',
				password: bcryptjs.hashSync('admin', 10),
				usuario: 'admin',
				rol: 1,
				EmpresaId: 1,
				createdAt: moment().format(),
			},
			{
				nombre: 'Camila Di Giacomo',
				password: bcryptjs.hashSync('123456', 10),
				usuario: 'cdigiacomo',
				rol: 1,
				EmpresaId: 1,
				createdAt: moment().format(),
			},
			{
				nombre: 'Yazmín Juarez',
				password: bcryptjs.hashSync('123456', 10),
				usuario: 'yjuarez',
				rol: 1,
				EmpresaId: 1,
				createdAt: moment().format(),
			},
			{
				nombre: 'Jennifer Laurence',
				password: bcryptjs.hashSync('123456', 10),
				usuario: 'jlaurence',
				rol: 0,
				EmpresaId: 1,
				createdAt: moment().format(),
			},
			{
				nombre: 'Agustín Verrando',
				password: bcryptjs.hashSync('123456', 10),
				usuario: 'averrando',
				rol: 0,
				EmpresaId: 1,
				createdAt: moment().format(),
			},
		];
		await queryInterface.bulkInsert('usuario', usuarios, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('usuario', null, {});
	},
};
