'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('cliente', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			nombre: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			apellido: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			observaciones: {
				type: Sequelize.STRING(120),
			},
			instagram: {
				type: Sequelize.STRING(30),
			},
			facebook: {
				type: Sequelize.STRING(30),
			},
			celular: {
				type: Sequelize.STRING(30),
			},
			email: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			mascota: {
				type: Sequelize.STRING(30),
			},
			tipo: {
				type: Sequelize.STRING(15),
				allowNull: false,
			},
			dni: {
				type: Sequelize.STRING(15),
			},
			razonSocial: {
				type: Sequelize.STRING(30),
			},
			condIva: {
				type: Sequelize.STRING(30),
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			EmpresaId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'empresa', key: 'id' },
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('cliente');
	},
};
