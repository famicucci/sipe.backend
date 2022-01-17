'use strict';
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let movimientos = [
			{
				ProductoCodigo: 'PJ100027LM',
				cantidad: 2,
				PtoStockId: 1,
				UsuarioId: 3,
				motivo: 'movimiento',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RA100031LM',
				cantidad: -1,
				PtoStockId: 1,
				UsuarioId: 3,
				motivo: 'venta',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'PJ100022LM',
				cantidad: -2,
				PtoStockId: 1,
				UsuarioId: 3,
				motivo: 'venta',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'PJ100027LM',
				cantidad: 4,
				PtoStockId: 1,
				UsuarioId: 3,
				motivo: 'movimiento',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'PJ100022LM',
				cantidad: 2,
				PtoStockId: 1,
				UsuarioId: 3,
				motivo: 'movimiento',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RA100031LM',
				cantidad: -1,
				PtoStockId: 1,
				UsuarioId: 3,
				motivo: 'venta',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'PJ100022LM',
				cantidad: -1,
				PtoStockId: 1,
				UsuarioId: 3,
				motivo: 'venta',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RA100031LM',
				cantidad: 2,
				PtoStockId: 1,
				UsuarioId: 3,
				motivo: 'movimiento',
				createdAt: moment().format(),
			},
		];
		await queryInterface.bulkInsert('movimientostock', movimientos, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('movimientostock', null, {});
	},
};
