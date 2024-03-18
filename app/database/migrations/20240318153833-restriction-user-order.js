"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("orden", "orden_ibfk_3");
    await queryInterface.addConstraint("orden", {
      type: "foreign key",
      name: "orden_ibfk_3",
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
    await queryInterface.removeConstraint("orden", "orden_ibfk_3");
    await queryInterface.addConstraint("orden", {
      type: "foreign key",
      name: "orden_ibfk_3",
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
