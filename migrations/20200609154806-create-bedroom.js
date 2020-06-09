'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bedrooms', {
      id:  {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.STRING,
        
      },
      title: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
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