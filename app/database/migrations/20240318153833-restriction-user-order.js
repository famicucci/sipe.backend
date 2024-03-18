"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("orden", "orden_ibfk_3");
    // await queryInterface.changeColumn("orden", "UsuarioId", {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: { model: "usuario", key: "id" },
    // });
    await queryInterface.addConstraint("orden", {
      type: "foreign key",
      name: "orden_ibfk_3",
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
