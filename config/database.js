require('dotenv').config();

module.exports = {
	username: process.env.DB_USERNAME || 'root',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || 'sip-e-testing',
	host: process.env.DB_HOST || 'localhost',
	dialect: process.env.DB_DIALECT || 'mysql',

	// configurar seeds
	seederStorage: 'sequelize',
	seederStorageName: 'seeds',

	// Configurar migraciones
	migrationStorage: 'sequelize',
	migrationStorageName: 'migrations',
};
