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
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
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
