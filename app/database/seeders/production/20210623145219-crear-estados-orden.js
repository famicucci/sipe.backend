'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldData = [
			{
				ID: '4',
				Descripcion: 'En Producción',
				Color: '#E900DB',
				ID_Empresa: '1',
			},
			{
				ID: '6',
				Descripcion: 'Preparar pedido',
				Color: '#59FF00',
				ID_Empresa: '1',
			},
			{
				ID: '7',
				Descripcion: 'Avisar Cliente',
				Color: '#E71D1D',
				ID_Empresa: '1',
			},
			{
				ID: '8',
				Descripcion: 'Hacer Etiqueta',
				Color: '#E71D1D',
				ID_Empresa: '1',
			},
			{
				ID: '9',
				Descripcion: 'Esperando Retiro',
				Color: '#61BA3F',
				ID_Empresa: '1',
			},
			{
				ID: '10',
				Descripcion: 'Enviar',
				Color: '#E71D1D',
				ID_Empresa: '1',
			},
			{
				ID: '11',
				Descripcion: 'Finalizado',
				Color: '#61BA3F',
				ID_Empresa: '1',
			},
			{
				ID: '12',
				Descripcion: 'Envío en proceso',
				Color: '#61BA3F',
				ID_Empresa: '1',
			},
			{
				ID: '15',
				Descripcion: 'Cancelado',
				Color: '#D1D1D1',
				ID_Empresa: '1',
			},
		];
		let estadosOrden = oldData.map((x) => ({
			id: x.ID,
			descripcion: x.Descripcion,
			color: x.Color,
			EmpresaId: x.ID_Empresa,
		}));

		await queryInterface.bulkInsert('ordenestado', estadosOrden, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('ordenestado', null, {});
	},
};
