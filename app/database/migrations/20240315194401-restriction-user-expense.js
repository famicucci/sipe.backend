"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
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
  },
};
