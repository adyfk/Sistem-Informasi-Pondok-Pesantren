'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      title: {
        type: Sequelize.STRING(20)
      },
      description: {
        type: Sequelize.STRING(30)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Roles');
  }
};