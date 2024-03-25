"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("orden", "EmpresaId", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.bulkUpdate("orden", { EmpresaId: 5 });

    await queryInterface.addConstraint("orden", {
      type: "foreign key",
      name: "orden_ibfk_7",
      fields: ["EmpresaId"],
      references: {
        table: "empresa",
        field: "id",
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("orden", "EmpresaId");
  },
};
