'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PaymentTypes', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      title: {
        type: Sequelize.STRING(30),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PaymentTypes');
  }
};