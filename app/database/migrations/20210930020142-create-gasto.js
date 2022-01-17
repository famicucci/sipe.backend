'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('gasto', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			descripcion: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			estado: {
				type: Sequelize.STRING(15),
				allowNull: false,
			},
			importe: {
				type: Sequelize.DECIMAL(10, 2),
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
			UsuarioId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'usuario', key: 'id' },
			},
			EmpresaId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'empresa', key: 'id' },
			},
			GastoCategoriaId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'gastocategoria', key: 'id' },
			},
			GastoSubcategoriaId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'gastosubcategoria', key: 'id' },
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('gasto');
	},
};
