'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class OrdenEstado extends Model {
		static associate(models) {
			OrdenEstado.hasMany(models.Orden, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			OrdenEstado.belongsTo(models.Empresa, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
		}
	}
	OrdenEstado.init(
		{
			descripcion: { type: DataTypes.STRING(30), allowNull: false },
			color: { type: DataTypes.STRING(15), allowNull: false },
		},
		{
			sequelize,
			modelName: 'OrdenEstado',
			tableName: 'ordenestado',
			timestamps: false,
		}
	);
	return OrdenEstado;
};
