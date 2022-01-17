'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class ListaPrecio extends Model {
		static associate(models) {
			ListaPrecio.belongsTo(models.Empresa, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			ListaPrecio.hasMany(models.Precio);
		}
	}
	ListaPrecio.init(
		{
			descripcion: { type: DataTypes.STRING(30), allowNull: false },
			estado: { type: DataTypes.STRING(15), allowNull: false },
		},
		{
			sequelize,
			modelName: 'ListaPrecio',
			tableName: 'listaprecio',
			updatedAt: false,
		}
	);
	return ListaPrecio;
};
