'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('direccion', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			calle: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			numeroCalle: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			piso: {
				type: Sequelize.STRING(3),
			},
			depto: {
				type: Sequelize.STRING(10),
			},
			barrio: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			ciudad: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			provincia: {
				type: Sequelize.STRING(30),
			},
			codPostal: {
				type: Sequelize.STRING(11),
				allowNull: false,
			},
			refDireccion: {
				type: Sequelize.STRING(120),
			},
			ClienteId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'cliente', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('direccion');
	},
};
