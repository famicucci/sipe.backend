'use strict';
const bcryptjs = require('bcryptjs');
const moment = require('moment');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldUsuarios = [
			{
				ID: '103',
				NombreCompleto: 'Francisco Agustin Micucci',
				ID_Empresa: '1',
				Clave: '2711bf64ee2a4363c49631bc409d5a78',
				Usuario: 'famicu',
			},
			{
				ID: '105',
				NombreCompleto: 'Manuela Montes',
				ID_Empresa: '1',
				Clave: '2711bf64ee2a4363c49631bc409d5a78',
				Usuario: 'manuela',
			},
			{
				ID: '106',
				NombreCompleto: 'Giulia Segalla',
				ID_Empresa: '1',
				Clave: '2711bf64ee2a4363c49631bc409d5a78',
				Usuario: 'giulia',
			},
			{
				ID: '107',
				NombreCompleto: 'Flavia Manteiga',
				ID_Empresa: '1',
				Clave: '2711bf64ee2a4363c49631bc409d5a78',
				Usuario: 'flavia',
			},
			{
				ID: '108',
				NombreCompleto: 'Camila Di Giacomo',
				ID_Empresa: '1',
				Clave: '32804f00bee2cc3423616e03a51c0d4f',
				Usuario: 'camila',
			},
			{
				ID: '109',
				NombreCompleto: 'Dolores Rolando',
				ID_Empresa: '1',
				Clave: '2711bf64ee2a4363c49631bc409d5a78',
				Usuario: 'dolores',
			},
		];
		let usuarios = oldUsuarios.map((x) => ({
			id: x.ID,
			nombre: x.NombreCompleto,
			password: bcryptjs.hashSync('Wpepa123', 10),
			usuario: x.Usuario,
			rol: 1,
			createdAt: moment().format(),
			updatedAt: moment().format(),
			EmpresaId: x.ID_Empresa,
		}));
		await queryInterface.bulkInsert('usuario', usuarios, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('usuario', null, {});
	},
};
