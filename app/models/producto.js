'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Producto extends Model {
		static associate(models) {
			Producto.belongsTo(models.Empresa, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			Producto.hasMany(models.Stock, {
				as: 'stockProducto',
				sourceKey: 'codigo',
				foreignKey: { name: 'ProductoCodigo', allowNull: false },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
			Producto.hasMany(models.Precio, {
				foreignKey: {
					name: 'ProductoCodigo',
					allowNull: false,
				},
				sourceKey: 'codigo',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
			Producto.hasMany(models.MovimientoStock, {
				as: 'movimientoStock',
				sourceKey: 'codigo',
				foreignKey: { name: 'ProductoCodigo', allowNull: false },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
			Producto.hasMany(models.OrdenDetalle, {
				sourceKey: 'codigo',
				foreignKey: { name: 'ProductoCodigo', allowNull: false },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			});
			Producto.hasMany(models.FacturaDetalle, {
				sourceKey: 'codigo',
				foreignKey: { name: 'ProductoCodigo', allowNull: false },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			});
		}
	}
	Producto.init(
		{
			codigo: { type: DataTypes.STRING(15), allowNull: false, unique: true },
			descripcion: { type: DataTypes.STRING(120), allowNull: false },
		},
		{
			sequelize,
			modelName: 'Producto',
			tableName: 'producto',
			timestamps: false,
		}
	);
	return Producto;
};
