'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class GastoCategoria extends Model {
		static associate(models) {
			GastoCategoria.belongsTo(models.Empresa, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			GastoCategoria.hasMany(models.Gasto, {
				as: 'GastoCategoria',
				foreignKey: { name: 'GastoCategoriaId', allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			GastoCategoria.hasMany(models.GastoSubcategoria, {
				foreignKey: { name: 'GastoCategoriaId', allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
		}
	}
	GastoCategoria.init(
		{
			descripcion: { type: DataTypes.STRING(30), allowNull: false },
		},
		{
			sequelize,
			modelName: 'GastoCategoria',
			tableName: 'gastocategoria',
			timestamps: false,
		}
	);
	return GastoCategoria;
};
