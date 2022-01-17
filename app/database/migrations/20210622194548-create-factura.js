'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('factura', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			nroFactura: {
				type: Sequelize.STRING(15),
			},
			observaciones: {
				type: Sequelize.STRING(120),
			},
			estadoPago: {
				type: Sequelize.STRING(15),
				allowNull: false,
			},
			importe: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			descuento: {
				type: Sequelize.DECIMAL(5, 2),
			},
			tarifaEnvio: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			importeFinal: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			tipo: {
				type: Sequelize.STRING(3),
			},
			estado: {
				type: Sequelize.STRING(1),
				defaultValue: 'v',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			ClienteId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'cliente', key: 'id' },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			},
			OrdenId: {
				type: Sequelize.INTEGER,
				references: { model: 'orden', key: 'id' },
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
		await queryInterface.dropTable('factura');
	},
};
