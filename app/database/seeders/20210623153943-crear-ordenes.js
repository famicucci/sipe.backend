'use strict';
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let ordenes = [
			{
				observaciones: '',
				direccionEnvio: 'Av. Hipolito Hyrigoyen 346',
				tarifaEnvio: '456',
				ordenEcommerce: '234567890',
				createdAt: moment().format(),
				updatedAt: moment().format(),
				ClienteId: '1',
				PtoVentaId: '1',
				UsuarioId: '2',
				OrdenEstadoId: '2',
				TipoEnvioId: '1',
			},
			{
				observaciones: 'Observación de prueba',
				direccionEnvio: 'Av. Sarmiento 650',
				tarifaEnvio: '234',
				ordenEcommerce: '123456',
				createdAt: moment().format(),
				updatedAt: moment().format(),
				ClienteId: '2',
				PtoVentaId: '2',
				UsuarioId: '3',
				OrdenEstadoId: '1',
				TipoEnvioId: '2',
			},
		];
		await queryInterface.bulkInsert('orden', ordenes, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('orden', null, {});
	},
};
