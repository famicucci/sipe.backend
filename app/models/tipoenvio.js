'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class TipoEnvio extends Model {
		static associate(models) {
			TipoEnvio.belongsTo(models.Empresa, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			TipoEnvio.hasMany(models.Orden, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
		}
	}
	TipoEnvio.init(
		{
			descripcion: { type: DataTypes.STRING(30), allowNull: false },
		},
		{
			sequelize,
			modelName: 'TipoEnvio',
			tableName: 'tipoenvio',
			timestamps: false,
		}
	);
	return TipoEnvio;
};
