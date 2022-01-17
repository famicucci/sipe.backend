'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('producto', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			codigo: { type: Sequelize.STRING(15), allowNull: false, unique: true },
			descripcion: { type: Sequelize.STRING(120), allowNull: false },
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
		await queryInterface.dropTable('producto');
	},
};
