'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldData = [
			{ ID: '1', Descripcion: 'Retiro', ID_Empresa: '1' },
			{ ID: '2', Descripcion: 'Moto Nico', ID_Empresa: '1' },
			{ ID: '3', Descripcion: 'Moto Guille', ID_Empresa: '1' },
			{ ID: '4', Descripcion: 'OCA', ID_Empresa: '1' },
			{ ID: '5', Descripcion: 'Correo Argentino', ID_Empresa: '1' },
			{ ID: '6', Descripcion: 'PUDO', ID_Empresa: '1' },
			{ ID: '7', Descripcion: 'MD', ID_Empresa: '1' },
			{ ID: '8', Descripcion: 'Otro', ID_Empresa: '1' },
		];
		let tiposEnvio = oldData.map((x) => ({
			id: x.ID,
			descripcion: x.Descripcion,
			EmpresaId: x.ID_Empresa,
		}));
		await queryInterface.bulkInsert('tipoenvio', tiposEnvio, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('tipoenvio', null, {});
	},
};
