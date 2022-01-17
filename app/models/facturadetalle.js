'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class FacturaDetalle extends Model {
		static associate(models) {
			FacturaDetalle.belongsTo(models.Factura, {
				foreignKey: { allowNull: false },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
			FacturaDetalle.belongsTo(models.Producto, {
				foreignKey: { name: 'ProductoCodigo', allowNull: false },
				targetKey: 'codigo',
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			});
		}
	}
	FacturaDetalle.init(
		{
			cantidad: { type: DataTypes.INTEGER, allowNull: false },
			pu: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
		},
		{
			sequelize,
			modelName: 'FacturaDetalle',
			tableName: 'facturadetalle',
			timestamps: false,
		}
	);
	return FacturaDetalle;
};
