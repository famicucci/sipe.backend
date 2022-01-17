'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('pago', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			importe: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			estado: {
				type: Sequelize.STRING(1),
				defaultValue: 'v',
			},
			tipo: {
				type: Sequelize.STRING(3),
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			FacturaId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'factura', key: 'id' },
			},
			MetodoPagoId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'metodopago', key: 'id' },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			},
			UsuarioId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'usuario', key: 'id' },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('pago');
	},
};
