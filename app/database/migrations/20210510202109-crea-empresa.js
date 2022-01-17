'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('empresa', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			nombre: { type: Sequelize.STRING(30), allowNull: false, unique: true },
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('empresa');
	},
};
