'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('usuario', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nombre: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING(150),
				allowNull: false,
			},
			usuario: {
				type: Sequelize.STRING(15),
				allowNull: false,
				unique: true,
			},
			rol: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
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
		await queryInterface.dropTable('usuario');
	},
};
