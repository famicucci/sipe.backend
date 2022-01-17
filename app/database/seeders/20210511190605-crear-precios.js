'use strict';
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let precios = [
			{
				ProductoCodigo: 'PJ100027LM',
				pu: '1850',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'PJ100022LM',
				pu: '1760',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RA100031LM',
				pu: '1320',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'CTC100099SN',
				pu: '1425',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDM100103SN',
				pu: '1330',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100104SG',
				pu: '1520',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100105SB',
				pu: '1520',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100110MG',
				pu: '1520',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100111MA',
				pu: '1220',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100112MR',
				pu: '1010',
				ListaPrecioId: '1',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'PJ100027LM',
				pu: '1010',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'PJ100022LM',
				pu: '1200',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RA100031LM',
				pu: '1200',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'CTC100099SN',
				pu: '1200',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDM100103SN',
				pu: '1250',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100104SG',
				pu: '1250',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100105SB',
				pu: '1190',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100110MG',
				pu: '1190',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100111MA',
				pu: '1190',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
			{
				ProductoCodigo: 'RDA100112MR',
				pu: '1190',
				ListaPrecioId: '2',
				createdAt: moment().format(),
			},
		];
		await queryInterface.bulkInsert('precio', precios, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('precio', null, {});
	},
};
