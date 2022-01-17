'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Stock extends Model {
		static associate(models) {
			Stock.belongsTo(models.PtoStock, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			Stock.belongsTo(models.Producto, {
				foreignKey: { name: 'ProductoCodigo', allowNull: false },
				targetKey: 'codigo',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
		}
	}
	Stock.init(
		{
			cantidad: { type: DataTypes.INTEGER(11).UNSIGNED, allowNull: false },
		},
		{
			sequelize,
			modelName: 'Stock',
			tableName: 'stock',
			createdAt: false,
		}
	);
	return Stock;
};
