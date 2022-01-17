'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('movimientostock', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cantidad: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			motivo: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			ProductoCodigo: {
				type: Sequelize.STRING(15),
				allowNull: false,
				references: { model: 'producto', key: 'codigo' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			PtoStockId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'ptostock', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			UsuarioId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'usuario', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('movimientostock');
	},
};
