'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('ptostock', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			descripcion: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			stockMin: {
				type: Sequelize.INTEGER,
			},
			EmpresaId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'empresa', key: 'id' },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('ptostock');
	},
};
