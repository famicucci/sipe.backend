'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class MetodoPago extends Model {
		static associate(models) {
			MetodoPago.belongsTo(models.Empresa, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			MetodoPago.hasMany(models.Pago, {
				foreignKey: { allowNull: false },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			});
		}
	}
	MetodoPago.init(
		{
			descripcion: { type: DataTypes.STRING(30), allowNull: false },
		},
		{
			sequelize,
			modelName: 'MetodoPago',
			tableName: 'metodopago',
			timestamps: false,
		}
	);
	return MetodoPago;
};
