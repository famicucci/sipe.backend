'use strict';
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let clientes = [
			{
				nombre: 'Joaquín',
				apellido: 'Carrillo',
				observaciones: 'Otra observación de prueba',
				instagram: 'joacocarrillo',
				facebook: 'Joaco Carrillo',
				celular: '1234567',
				email: 'joacocarrillo@gmail.com',
				mascota: 'Canela',
				tipo: 'Minorista',
				dni: '1234567',
				razonSocial: 'Joaquín Carrillo',
				condIva: 'Consumidor Final',
				createdAt: moment().format(),
				updatedAt: moment().format(),
				EmpresaId: '1',
			},
			{
				nombre: 'Juan Miguel',
				apellido: 'Abdo',
				observaciones: '',
				instagram: 'jmiabdo',
				facebook: 'Juan Abdo',
				celular: '35464234',
				email: 'jmiabdo@gmail.com',
				mascota: 'Meca',
				tipo: 'Mayorista',
				dni: '2345678454',
				razonSocial: 'Juan Miguel',
				condIva: 'Responsable Inscripto',
				createdAt: moment().format(),
				updatedAt: moment().format(),
				EmpresaId: '1',
			},
			{
				nombre: 'Josefina',
				apellido: 'Alberú',
				observaciones: '',
				instagram: 'josealbe',
				facebook: 'Josefina Alberu',
				celular: '2345673456',
				email: 'josealbe@gmail.com',
				mascota: 'Tipi',
				tipo: 'Minorista',
				dni: '37040824',
				razonSocial: '',
				condIva: 'Consumidor Final',
				createdAt: moment().format(),
				updatedAt: moment().format(),
				EmpresaId: '1',
			},
			{
				nombre: 'Patricia',
				apellido: 'Almeda',
				observaciones: 'Observación de prueba',
				instagram: 'patrialmeda',
				facebook: 'Fran Micucci',
				celular: '213456789',
				email: 'patrialmeda@gmail.com',
				mascota: 'Pecks',
				tipo: 'Mayorista',
				dni: '21345678345',
				razonSocial: 'Patricia Almeda',
				condIva: 'Consumidor Final',
				createdAt: moment().format(),
				updatedAt: moment().format(),
				EmpresaId: '1',
			},
		];
		await queryInterface.bulkInsert('cliente', clientes, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('cliente', null, {});
	},
};
