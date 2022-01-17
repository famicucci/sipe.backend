'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class PtoVenta extends Model {
		static associate(models) {
			PtoVenta.belongsTo(models.Empresa, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			PtoVenta.belongsTo(models.PtoStock, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			PtoVenta.hasMany(models.Orden, {
				as: 'PtoVenta',
				foreignKey: { name: 'PtoVentaId', allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
		}
	}
	PtoVenta.init(
		{
			descripcion: { type: DataTypes.STRING(30), allowNull: false },
		},
		{
			sequelize,
			modelName: 'PtoVenta',
			tableName: 'ptoventa',
			timestamps: false,
		}
	);
	return PtoVenta;
};
