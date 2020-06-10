'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bedrooms', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      title: {
        type: Sequelize.STRING(35)
      },
      gender: {
        type: Sequelize.STRING(2)
      },
      capacity: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bedrooms');
  }
};