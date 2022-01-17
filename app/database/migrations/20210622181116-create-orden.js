'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('orden', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			observaciones: {
				type: Sequelize.STRING(120),
			},
			direccionEnvio: {
				type: Sequelize.STRING(50),
			},
			tarifaEnvio: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			ordenEcommerce: {
				type: Sequelize.STRING(30),
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			ClienteId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'cliente', key: 'id' },
			},
			PtoVentaId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'ptoventa', key: 'id' },
			},
			UsuarioId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'usuario', key: 'id' },
			},
			OrdenEstadoId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'ordenestado', key: 'id' },
			},
			TipoEnvioId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'tipoenvio', key: 'id' },
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('orden');
	},
};
