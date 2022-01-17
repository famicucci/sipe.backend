'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let categoriasGasto = [
			{
				descripcion: 'Personal',
				EmpresaId: '1',
			},
			{
				descripcion: 'Proveedor',
				EmpresaId: '1',
			},
			{
				descripcion: 'Insumos',
				EmpresaId: '1',
			},
			{
				descripcion: 'Envios',
				EmpresaId: '1',
			},
			{
				descripcion: 'Marketing',
				EmpresaId: '1',
			},
			{
				descripcion: 'Otros Gastos',
				EmpresaId: '1',
			},
		];
		await queryInterface.bulkInsert('gastocategoria', categoriasGasto, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('gastocategoria', null, {});
	},
};
