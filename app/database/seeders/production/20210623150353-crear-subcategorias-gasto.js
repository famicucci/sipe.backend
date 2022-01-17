'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldData = [
			{ ID: '1', Descripcion: 'Sueldos', ID_Categoria: '1', ID_Empresa: '1' },
			{
				ID: '2',
				Descripcion: 'Pago extra',
				ID_Categoria: '1',
				ID_Empresa: '1',
			},
			{
				ID: '9',
				Descripcion: 'Serv. Profesionales',
				ID_Categoria: '1',
				ID_Empresa: '1',
			},
			{
				ID: '10',
				Descripcion: 'Estampado',
				ID_Categoria: '2',
				ID_Empresa: '1',
			},
			{ ID: '11', Descripcion: 'Costura', ID_Categoria: '2', ID_Empresa: '1' },
			{ ID: '12', Descripcion: 'Otros', ID_Categoria: '2', ID_Empresa: '1' },
			{ ID: '13', Descripcion: 'Telas', ID_Categoria: '3', ID_Empresa: '1' },
			{ ID: '14', Descripcion: 'Otros', ID_Categoria: '3', ID_Empresa: '1' },
			{ ID: '15', Descripcion: 'OCA', ID_Categoria: '4', ID_Empresa: '1' },
			{ ID: '16', Descripcion: 'Pudo', ID_Categoria: '4', ID_Empresa: '1' },
			{ ID: '17', Descripcion: 'Moto', ID_Categoria: '4', ID_Empresa: '1' },
			{ ID: '18', Descripcion: 'Flete', ID_Categoria: '4', ID_Empresa: '1' },
			{
				ID: '19',
				Descripcion: 'C. Argentino',
				ID_Categoria: '4',
				ID_Empresa: '1',
			},
			{
				ID: '20',
				Descripcion: 'M. Envios',
				ID_Categoria: '4',
				ID_Empresa: '1',
			},
			{
				ID: '21',
				Descripcion: 'Insumos de Oficina',
				ID_Categoria: '5',
				ID_Empresa: '1',
			},
			{ ID: '22', Descripcion: 'Otros', ID_Categoria: '5', ID_Empresa: '1' },
			{ ID: '23', Descripcion: 'MD', ID_Categoria: '4', ID_Empresa: '1' },
			{
				ID: '24',
				Descripcion: 'Proveedor PT',
				ID_Categoria: '2',
				ID_Empresa: '1',
			},
			{
				ID: '25',
				Descripcion: 'Facebook/Instagram',
				ID_Categoria: '6',
				ID_Empresa: '1',
			},
			{
				ID: '26',
				Descripcion: 'Otros Gastos de Publicidad',
				ID_Categoria: '6',
				ID_Empresa: '1',
			},
			{
				ID: '27',
				Descripcion: 'Alquileres',
				ID_Categoria: '7',
				ID_Empresa: '1',
			},
			{
				ID: '28',
				Descripcion: 'Servicios',
				ID_Categoria: '7',
				ID_Empresa: '1',
			},
			{
				ID: '29',
				Descripcion: 'Softwares/Plataformas',
				ID_Categoria: '7',
				ID_Empresa: '1',
			},
			{
				ID: '30',
				Descripcion: 'Otros Gastos de Estructura',
				ID_Categoria: '7',
				ID_Empresa: '1',
			},
		];
		let subcategoriasGasto = oldData.map((x) => ({
			id: x.ID,
			descripcion: x.Descripcion,
			GastoCategoriaId: x.ID_Categoria,
			EmpresaId: x.ID_Empresa,
		}));
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
