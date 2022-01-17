'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Factura extends Model {
		static associate(models) {
			Factura.belongsTo(models.Orden, {
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
			Factura.belongsTo(models.Usuario, {
				foreignKey: { allowNull: false },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			});
			Factura.belongsTo(models.Cliente, {
				foreignKey: { allowNull: false },
				onDelete: 'NO ACTION',
				onUpdate: 'NO ACTION',
			});
			Factura.hasMany(models.FacturaDetalle, {
				as: 'detalleFactura',
				foreignKey: { allowNull: false },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
			Factura.hasMany(models.Pago, {
				foreignKey: { allowNull: false },
				onDelete: 'RESTRICT',
				onUpdate: 'RESTRICT',
			});
		}
	}
	Factura.init(
		{
			nroFactura: { type: DataTypes.STRING(15) },
			observaciones: { type: DataTypes.STRING(120) },
			estadoPago: { type: DataTypes.STRING(15), allowNull: false },
			importe: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
			descuento: DataTypes.DECIMAL(5, 2),
			tarifaEnvio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
			importeFinal: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
			tipo: DataTypes.STRING(3),
			estado: { type: DataTypes.STRING(1), defaultValue: 'v' },
		},
		{
			sequelize,
			modelName: 'Factura',
			tableName: 'factura',
			updatedAt: false,
		}
	);
	return Factura;
};
