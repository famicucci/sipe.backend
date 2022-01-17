'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Precio extends Model {
		static associate(models) {
			Precio.belongsTo(models.ListaPrecio);
			Precio.belongsTo(models.Producto, {
				foreignKey: { name: 'ProductoCodigo', allowNull: false },
				targetKey: 'codigo',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
		}
	}
	Precio.init(
		{
			pu: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
			ListaPrecioId: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: 'Precio',
			tableName: 'precio',
		}
	);
	return Precio;
};
