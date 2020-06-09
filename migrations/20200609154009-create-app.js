'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Apps', {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Apps');
  }
};