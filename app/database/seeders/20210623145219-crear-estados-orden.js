'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let estadosOrden = [
			{
				descripcion: 'En Producción',
				color: '#E900DB',
				EmpresaId: '1',
			},
			{
				descripcion: 'Preparar pedido',
				color: '#59FF00',
				EmpresaId: '1',
			},
			{
				descripcion: 'Avisar Cliente',
				color: '#E71D1D',
				EmpresaId: '1',
			},
			{
				descripcion: 'Enviar',
				color: '#E71D1D',
				EmpresaId: '1',
			},
			{
				descripcion: 'Finalizado',
				color: '#61BA3F',
				EmpresaId: '1',
			},
			{
				descripcion: 'Cancelado',
				color: '#D1D1D1',
				EmpresaId: '1',
			},
		];

		await queryInterface.bulkInsert('ordenestado', estadosOrden, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('ordenestado', null, {});
	},
};
