'use strict';

module.exports = {
	// se ejecuta cuando hacemos la siembra
	up: async (queryInterface, Sequelize) => {
		let productos = [
			{
				codigo: 'PJ100027LM',
				descripcion: 'Pantalon joggin - lineas horizontales - m - marrón',
				EmpresaId: 1,
			},
			{
				codigo: 'PJ100022LM',
				descripcion: 'Pantalon joggin - lineas verticales - m - gris',
				EmpresaId: 1,
			},
			{
				codigo: 'RA100031LM',
				descripcion: 'Remera algodón - basketball - s - negro',
				EmpresaId: 1,
			},
			{
				codigo: 'CTC100099SN',
				descripcion: 'Camiseta termica c/cierre - s - negro',
				EmpresaId: 1,
			},
			{
				codigo: 'RDM100103SN',
				descripcion: 'Remera de modal - s - negro',
				EmpresaId: 1,
			},
			{
				codigo: 'RDA100104SG',
				descripcion: 'Remera de algodón - s - gris',
				EmpresaId: 1,
			},
			{
				codigo: 'RDA100105SB',
				descripcion: 'Remera de algodón - s - blanca',
				EmpresaId: 1,
			},
			{
				codigo: 'RDA100110MG',
				descripcion: 'Buzo de algodón frisado - m - gris',
				EmpresaId: 1,
			},
			{
				codigo: 'RDA100111MA',
				descripcion: 'Buzo de algodón frisado - m - amarillo',
				EmpresaId: 1,
			},
			{
				codigo: 'RDA100112MR',
				descripcion: 'Buzo de algodón frisado - m - rojo',
				EmpresaId: 1,
			},
		];

		await queryInterface.bulkInsert('producto', productos, {});
	},

	// se ejecuta cuando se deshace la siembra
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('producto', null, {});
	},
};
