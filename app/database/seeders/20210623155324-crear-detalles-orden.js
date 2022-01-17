'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let detallesOrdenes = [
			{
				cantidad: 2,
				pu: 2345,
				origen: 'Disponible',
				OrdenId: 1,
				ProductoCodigo: 'PJ100027LM',
				PtoStockId: 1,
			},
			{
				cantidad: 6,
				pu: 9876,
				origen: 'Disponible',
				OrdenId: 1,
				ProductoCodigo: 'CTC100099SN',
				PtoStockId: 2,
			},
			{
				cantidad: 4,
				pu: 5676,
				origen: 'Disponible',
				OrdenId: 2,
				ProductoCodigo: 'RDA100110MG',
				PtoStockId: 3,
			},
		];
		await queryInterface.bulkInsert('ordendetalle', detallesOrdenes, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('ordendetalle', null, {});
	},
};
