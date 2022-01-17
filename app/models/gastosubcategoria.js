'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class GastoSubcategoria extends Model {
		static associate(models) {
			GastoSubcategoria.belongsTo(models.GastoCategoria, {
				foreignKey: { name: 'GastoCategoriaId', allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			GastoSubcategoria.belongsTo(models.Empresa, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			GastoSubcategoria.hasMany(models.Gasto, {
				as: 'GastoSubcategoria',
				foreignKey: { name: 'GastoSubcategoriaId', allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
		}
	}
	GastoSubcategoria.init(
		{
			descripcion: { type: DataTypes.STRING(30), allowNull: false },
		},
		{
			sequelize,
			modelName: 'GastoSubcategoria',
			tableName: 'gastosubcategoria',
			timestamps: false,
		}
	);
	return GastoSubcategoria;
};
