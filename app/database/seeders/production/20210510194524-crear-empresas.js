'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const oldEmpresas = [{ ID: '1', Descripcion: 'Pepapets' }];

		let empresas = oldEmpresas.map((x) => ({
			id: x.ID,
			nombre: x.Descripcion,
		}));

		await queryInterface.bulkInsert('empresa', empresas, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('empresa', null, {});
	},
};
