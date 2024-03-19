"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("gasto", "UsuarioId", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.removeConstraint("gasto", "gasto_ibfk_1");
    await queryInterface.addConstraint("gasto", {
      type: "foreign key",
      name: "gasto_ibfk_1",
      fields: ["UsuarioId"],
      references: {
        table: "usuario",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("gasto", "gasto_ibfk_1");
    await queryInterface.addConstraint("gasto", {
      type: "foreign key",
      name: "gasto_ibfk_1",
      fields: ["UsuarioId"],
      references: {
        table: "usuario",
        field: "id",
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    await queryInterface.changeColumn("gasto", "UsuarioId", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
