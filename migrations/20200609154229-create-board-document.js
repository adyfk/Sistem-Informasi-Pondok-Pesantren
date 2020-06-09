'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BoardDocuments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boarId: {
        type: Sequelize.STRING
      },
      fcKK: {
        type: Sequelize.STRING
      },
      fcKTP: {
        type: Sequelize.STRING
      },
      fcAkte: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      npwp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BoardDocuments');
  }
};