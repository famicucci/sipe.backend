'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class PtoStock extends Model {
		static associate(models) {
			PtoStock.belongsTo(models.Empresa, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			PtoStock.hasMany(models.Stock, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			PtoStock.hasMany(models.MovimientoStock, {
				foreignKey: { allowNull: false },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
			PtoStock.hasMany(models.PtoVenta, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			PtoStock.hasMany(models.OrdenDetalle, {
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			});
		}
	}
	PtoStock.init(
		{
			descripcion: { type: DataTypes.STRING(30), allowNull: false },
			stockMin: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'PtoStock',
			tableName: 'ptostock',
			timestamps: false,
		}
	);
	return PtoStock;
};
