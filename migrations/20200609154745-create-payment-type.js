'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PaymentTypes', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      description: {
        type: Sequelize.STRING(30)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PaymentTypes');
  }
};