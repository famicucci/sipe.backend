'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pago extends Model {
		static associate(models) {
			Pago.belongsTo(models.Factura, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			Pago.belongsTo(models.MetodoPago, {
				foreignKey: { allowNull: false },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			});
			Pago.belongsTo(models.Usuario, {
				foreignKey: { allowNull: false },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			});
		}
	}
	Pago.init(
		{
			importe: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
			estado: { type: DataTypes.STRING(1), defaultValue: 'v' },
			tipo: DataTypes.STRING(3),
		},
		{
			sequelize,
			modelName: 'Pago',
			tableName: 'pago',
			updatedAt: false,
		}
	);
	return Pago;
};
