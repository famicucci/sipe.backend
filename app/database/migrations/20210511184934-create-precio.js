'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('precio', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			pu: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			ListaPrecioId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'listaprecio', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			ProductoCodigo: {
				type: Sequelize.STRING(15),
				allowNull: false,
				references: { model: 'producto', key: 'codigo' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('precio');
	},
};
