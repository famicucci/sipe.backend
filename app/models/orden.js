"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orden extends Model {
    static associate(models) {
      Orden.belongsTo(models.Cliente, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Orden.belongsTo(models.PtoVenta, {
        as: "PtoVenta",
        foreignKey: { name: "PtoVentaId", allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Orden.belongsTo(models.Usuario, {
        foreignKey: { allowNull: true },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Orden.belongsTo(models.OrdenEstado, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Orden.belongsTo(models.TipoEnvio, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Orden.hasMany(models.OrdenDetalle, {
        as: "detalleOrden",
        foreignKey: { allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Orden.hasOne(models.Factura, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
    }
  }
  Orden.init(
    {
      observaciones: { type: DataTypes.STRING(120) },
      direccionEnvio: { type: DataTypes.STRING(50) },
      tarifaEnvio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      ordenEcommerce: { type: DataTypes.STRING(30) },
    },
    {
      sequelize,
      modelName: "Orden",
      tableName: "orden",
    }
  );
  return Orden;
};
