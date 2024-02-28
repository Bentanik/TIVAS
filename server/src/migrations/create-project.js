'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT('long')
      },
      location: {
        type: Sequelize.STRING
      },
      buildingStatus: {
        type: Sequelize.INTEGER
      },
      features: {
        type: Sequelize.STRING
      },
      attractions: {
        type: Sequelize.STRING
      },
      saleStatus: {
        type: Sequelize.INTEGER
      },
      reservationPrice: {
        type: Sequelize.DOUBLE
      },
      openDate: {
        type: Sequelize.DATE
      },
      thumbnailPathUrl: {
        type: Sequelize.STRING
      },
      thumbnailPathName: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Projects');
  }
};