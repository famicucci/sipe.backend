'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Direccion extends Model {
		static associate(models) {
			Direccion.belongsTo(models.Cliente, {
				foreignKey: { allowNull: false },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
		}
	}
	Direccion.init(
		{
			calle: { type: DataTypes.STRING(30), allowNull: false },
			numeroCalle: { type: DataTypes.INTEGER, allowNull: false },
			piso: { type: DataTypes.STRING(3) },
			depto: { type: DataTypes.STRING(10) },
			barrio: { type: DataTypes.STRING(30), allowNull: false },
			ciudad: { type: DataTypes.STRING(30), allowNull: false },
			provincia: { type: DataTypes.STRING(30) },
			codPostal: { type: DataTypes.STRING(11), allowNull: false },
			refDireccion: { type: DataTypes.STRING(120) },
		},
		{
			sequelize,
			modelName: 'Direccion',
			tableName: 'direccion',
			timestamps: false,
		}
	);
	return Direccion;
};
