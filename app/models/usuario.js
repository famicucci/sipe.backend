"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.Empresa, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Usuario.hasMany(models.MovimientoStock, {
        foreignKey: { allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Usuario.hasMany(models.Orden, {
        foreignKey: { allowNull: true },
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      });
      Usuario.hasMany(models.Gasto, {
        foreignKey: { allowNull: true },
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      });
      Usuario.hasMany(models.Factura, {
        foreignKey: { allowNull: false },
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });
      Usuario.hasMany(models.Pago, {
        foreignKey: { allowNull: false },
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });
    }
  }
  Usuario.init(
    {
      nombre: { type: DataTypes.STRING(50), allowNull: false },
      password: { type: DataTypes.STRING(150), allowNull: false },
      usuario: { type: DataTypes.STRING(15), allowNull: false },
      rol: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuario",
    }
  );
  return Usuario;
};
