"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Configuration extends Model {
    static associate(models) {
      Configuration.belongsTo(models.Empresa, {
        foreignKey: { allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Configuration.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "boolean",
      },
      value: { type: DataTypes.STRING },
      EmpresaId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "empresa",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Configuration",
      tableName: "configurations",
      timestamps: true,
    }
  );
  return Configuration;
};
