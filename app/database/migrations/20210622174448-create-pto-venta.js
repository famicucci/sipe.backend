'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('ptoventa', {
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
			PtoStockId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'ptostock', key: 'id' },
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('ptoventa');
	},
};
