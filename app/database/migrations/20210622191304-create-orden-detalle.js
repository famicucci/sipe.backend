'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('ordendetalle', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			cantidad: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			pu: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			origen: {
				type: Sequelize.STRING(15),
			},
			BacklogProduccionId: {
				type: Sequelize.INTEGER,
			},
			OrdenId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'orden', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			ProductoCodigo: {
				type: Sequelize.STRING(15),
				allowNull: false,
				// references: { model: 'producto', key: 'codigo' },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			},
			PtoStockId: {
				type: Sequelize.INTEGER,
				references: { model: 'ptostock', key: 'id' },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('ordendetalle');
	},
};
