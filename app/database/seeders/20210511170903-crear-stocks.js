'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let stocks = [
			{ ProductoCodigo: 'PJ100027LM', cantidad: 22, PtoStockId: 1 },
			{ ProductoCodigo: 'PJ100022LM', cantidad: 11, PtoStockId: 1 },
			{ ProductoCodigo: 'RA100031LM', cantidad: 91, PtoStockId: 1 },
			{
				ProductoCodigo: 'CTC100099SN',
				cantidad: 2,
				PtoStockId: 1,
			},
			{
				ProductoCodigo: 'RDM100103SN',
				cantidad: 53,
				PtoStockId: 1,
			},
			{
				ProductoCodigo: 'RDA100104SG',
				cantidad: 7,
				PtoStockId: 1,
			},
			{
				ProductoCodigo: 'RDA100105SB',
				cantidad: 102,
				PtoStockId: 1,
			},
			{
				ProductoCodigo: 'RDA100110MG',
				cantidad: 4,
				PtoStockId: 1,
			},
			{
				ProductoCodigo: 'RDA100111MA',
				cantidad: 27,
				PtoStockId: 1,
			},
			{
				ProductoCodigo: 'RDA100112MR',
				cantidad: 30,
				PtoStockId: 1,
			},
			{ ProductoCodigo: 'PJ100027LM', cantidad: 36, PtoStockId: 2 },
			{ ProductoCodigo: 'PJ100022LM', cantidad: 4, PtoStockId: 2 },
			{ ProductoCodigo: 'RA100031LM', cantidad: 10, PtoStockId: 2 },
			{
				ProductoCodigo: 'CTC100099SN',
				cantidad: 2,
				PtoStockId: 2,
			},
			{
				ProductoCodigo: 'RDM100103SN',
				cantidad: 53,
				PtoStockId: 2,
			},
			{
				ProductoCodigo: 'RDA100104SG',
				cantidad: 7,
				PtoStockId: 2,
			},
			{
				ProductoCodigo: 'RDA100105SB',
				cantidad: 102,
				PtoStockId: 2,
			},
			{
				ProductoCodigo: 'RDA100110MG',
				cantidad: 4,
				PtoStockId: 2,
			},
			{
				ProductoCodigo: 'RDA100111MA',
				cantidad: 27,
				PtoStockId: 2,
			},
			{
				ProductoCodigo: 'RDA100112MR',
				cantidad: 30,
				PtoStockId: 2,
			},
			{ ProductoCodigo: 'PJ100027LM', cantidad: 17, PtoStockId: 3 },
			{ ProductoCodigo: 'PJ100022LM', cantidad: 3, PtoStockId: 3 },
			{ ProductoCodigo: 'RA100031LM', cantidad: 2, PtoStockId: 3 },
			{
				ProductoCodigo: 'CTC100099SN',
				cantidad: 2,
				PtoStockId: 3,
			},
			{
				ProductoCodigo: 'RDM100103SN',
				cantidad: 53,
				PtoStockId: 3,
			},
			{
				ProductoCodigo: 'RDA100104SG',
				cantidad: 7,
				PtoStockId: 3,
			},
			{
				ProductoCodigo: 'RDA100105SB',
				cantidad: 102,
				PtoStockId: 3,
			},
			{
				ProductoCodigo: 'RDA100110MG',
				cantidad: 4,
				PtoStockId: 3,
			},
			{
				ProductoCodigo: 'RDA100111MA',
				cantidad: 27,
				PtoStockId: 3,
			},
			{
				ProductoCodigo: 'RDA100112MR',
				cantidad: 30,
				PtoStockId: 3,
			},
			{ ProductoCodigo: 'PJ100027LM', cantidad: 9, PtoStockId: 4 },
			{ ProductoCodigo: 'PJ100022LM', cantidad: 23, PtoStockId: 4 },
			{ ProductoCodigo: 'RA100031LM', cantidad: 55, PtoStockId: 4 },
			{
				ProductoCodigo: 'CTC100099SN',
				cantidad: 2,
				PtoStockId: 4,
			},
			{
				ProductoCodigo: 'RDM100103SN',
				cantidad: 53,
				PtoStockId: 4,
			},
			{
				ProductoCodigo: 'RDA100104SG',
				cantidad: 7,
				PtoStockId: 4,
			},
			{
				ProductoCodigo: 'RDA100105SB',
				cantidad: 102,
				PtoStockId: 4,
			},
			{
				ProductoCodigo: 'RDA100110MG',
				cantidad: 4,
				PtoStockId: 4,
			},
			{
				ProductoCodigo: 'RDA100111MA',
				cantidad: 27,
				PtoStockId: 4,
			},
			{
				ProductoCodigo: 'RDA100112MR',
				cantidad: 30,
				PtoStockId: 4,
			},
		];
		await queryInterface.bulkInsert('stock', stocks, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('stock', null, {});
	},
};
