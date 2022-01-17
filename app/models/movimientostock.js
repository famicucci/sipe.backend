'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class MovimientoStock extends Model {
		static associate(models) {
			MovimientoStock.belongsTo(models.Producto, {
				foreignKey: { name: 'ProductoCodigo', allowNull: false },
				targetKey: 'codigo',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
			MovimientoStock.belongsTo(models.PtoStock, {
				foreignKey: { allowNull: false },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
			MovimientoStock.belongsTo(models.Usuario, {
				foreignKey: { allowNull: false },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
		}
	}
	MovimientoStock.init(
		{
			cantidad: { type: DataTypes.INTEGER, allowNull: false },
			motivo: { type: DataTypes.STRING(30), allowNull: false },
		},
		{
			sequelize,
			modelName: 'MovimientoStock',
			tableName: 'movimientostock',
			updatedAt: false,
		}
	);
	return MovimientoStock;
};
