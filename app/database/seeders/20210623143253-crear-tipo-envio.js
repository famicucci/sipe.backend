'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let tiposEnvio = [
			{
				descripcion: 'Retiro',
				EmpresaId: '1',
			},
			{
				descripcion: 'OCA',
				EmpresaId: '1',
			},
			{
				descripcion: 'Correo Argentino',
				EmpresaId: '1',
			},
			{
				descripcion: 'PUDO',
				EmpresaId: '1',
			},
			{
				descripcion: 'MD',
				EmpresaId: '1',
			},
			{
				descripcion: 'Otro',
				EmpresaId: '1',
			},
			{
				descripcion: 'A Definir',
				EmpresaId: '1',
			},
		];
		await queryInterface.bulkInsert('tipoenvio', tiposEnvio, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('tipoenvio', null, {});
	},
};
