'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('stock', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cantidad: {
				type: Sequelize.INTEGER(11).UNSIGNED,
				allowNull: false,
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
			PtoStockId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'ptostock', key: 'id' },
				onUpdate: 'RESTRICT',
				onDelete: 'RESTRICT',
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('stock');
	},
};
