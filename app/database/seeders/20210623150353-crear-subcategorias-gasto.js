'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let subcategoriasGasto = [
			{
				descripcion: 'Sueldos',
				GastoCategoriaId: '1',
				EmpresaId: '1',
			},
			{
				descripcion: 'Pago Extra',
				GastoCategoriaId: '1',
				EmpresaId: '1',
			},
			{
				descripcion: 'Serv. Profesionales',
				GastoCategoriaId: '1',
				EmpresaId: '1',
			},
			{
				descripcion: 'Telas',
				GastoCategoriaId: '2',
				EmpresaId: '1',
			},
			{
				descripcion: 'Otros',
				GastoCategoriaId: '2',
				EmpresaId: '1',
			},
			{
				descripcion: 'Flete',
				GastoCategoriaId: '4',
				EmpresaId: '1',
			},
			{
				descripcion: 'PUDO',
				GastoCategoriaId: '4',
				EmpresaId: '1',
			},
			{
				descripcion: 'Insumos de Oficina',
				GastoCategoriaId: '3',
				EmpresaId: '1',
			},
			{
				descripcion: 'Otros',
				GastoCategoriaId: '3',
				EmpresaId: '1',
			},
			{
				descripcion: 'Google Ads',
				GastoCategoriaId: '6',
				EmpresaId: '1',
			},
			{
				descripcion: 'Facebook',
				GastoCategoriaId: '6',
				EmpresaId: '1',
			},
			{
				descripcion: 'Otros',
				GastoCategoriaId: '5',
				EmpresaId: '1',
			},
		];
		await queryInterface.bulkInsert(
			'gastosubcategoria',
			subcategoriasGasto,
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('gastosubcategoria', null, {});
	},
};
