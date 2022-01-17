'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tipoenvio', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			descripcion: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			EmpresaId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'empresa', key: 'id' },
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('tipoenvio');
	},
};
