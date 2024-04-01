"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    static associate(models) {
      Empresa.hasMany(models.Producto, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.Usuario, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.Gasto, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.PtoStock, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.PtoVenta, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.ListaPrecio, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.Cliente, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.MetodoPago, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.GastoCategoria, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.GastoSubcategoria, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.TipoEnvio, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
      Empresa.hasMany(models.OrdenEstado, {
        foreignKey: { allowNull: false },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
      });
    }
  }
  Empresa.init(
    {
      nombre: { type: DataTypes.STRING(30), allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "Empresa",
      tableName: "empresa",
      timestamps: false,
    }
  );
  return Empresa;
};
