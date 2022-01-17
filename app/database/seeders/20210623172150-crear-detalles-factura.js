'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let detallesFactura = [
			{
				cantidad: 2,
				pu: 2345,
				FacturaId: 1,
				ProductoCodigo: 'PJ100027LM',
			},
			{
				cantidad: 6,
				pu: 9876,
				FacturaId: 1,
				ProductoCodigo: 'CTC100099SN',
			},
			{
				cantidad: 4,
				pu: 5676,
				FacturaId: 2,
				ProductoCodigo: 'RDA100110MG',
			},
		];
		await queryInterface.bulkInsert('facturadetalle', detallesFactura, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('facturadetalle', null, {});
	},
};
