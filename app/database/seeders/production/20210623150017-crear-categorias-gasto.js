'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldData = [
			{ ID: '1', Descripcion: 'Personal', ID_Empresa: '1' },
			{ ID: '2', Descripcion: 'Proveedor MO', ID_Empresa: '1' },
			{ ID: '3', Descripcion: 'Insumos producción', ID_Empresa: '1' },
			{ ID: '4', Descripcion: 'Envios', ID_Empresa: '1' },
			{ ID: '5', Descripcion: 'Otros Gastos', ID_Empresa: '1' },
			{ ID: '6', Descripcion: 'Marketing/Publicidad', ID_Empresa: '1' },
			{ ID: '7', Descripcion: 'Estructura', ID_Empresa: '1' },
		];
		let categoriasGasto = oldData.map((x) => ({
			id: x.ID,
			descripcion: x.Descripcion,
			EmpresaId: x.ID_Empresa,
		}));
		await queryInterface.bulkInsert('gastocategoria', categoriasGasto, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('gastocategoria', null, {});
	},
};
