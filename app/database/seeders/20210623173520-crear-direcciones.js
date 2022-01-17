'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let direcciones = [
			{
				calle: 'Av. Sarmiento',
				numeroCalle: 2342,
				piso: 3,
				depto: 'c',
				barrio: 'Belgrano',
				ciudad: 'Córdoba',
				provincia: 'Córdoba',
				codPostal: 5000,
				refDireccion: 'Cerca de la esquina',
				ClienteId: 1,
			},
			{
				calle: 'Av. Junin',
				numeroCalle: 76,
				piso: 3,
				depto: 'a',
				barrio: 'Nueva Córdoba',
				ciudad: 'Córdoba',
				provincia: 'Córdoba',
				codPostal: 5000,
				ClienteId: 2,
			},
			{
				calle: 'Buenos Aires',
				numeroCalle: 456,
				piso: 8,
				depto: 'b',
				barrio: 'Nueva Córdoba',
				ciudad: 'Córdoba',
				provincia: 'Córdoba',
				codPostal: 5000,
				refDireccion: 'Cerca del Buen Pastor',
				ClienteId: 3,
			},
		];
		await queryInterface.bulkInsert('direccion', direcciones, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('direccion', null, {});
	},
};
