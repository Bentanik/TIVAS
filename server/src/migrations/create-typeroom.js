'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TypeRooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      persons: {
        type: Sequelize.INTEGER
      },
      kitchen: {
        type: Sequelize.STRING
      },
      entertainment: {
        type: Sequelize.STRING
      },
      features: {
        type: Sequelize.STRING
      },
      policies: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      typeOfProjectID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TypeRooms');
  }
};