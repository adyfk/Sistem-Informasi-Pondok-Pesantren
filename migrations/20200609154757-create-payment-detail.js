'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PaymentDetails', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      paymentTypeId: {
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.STRING(30)
      },
      paid: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PaymentDetails');
  }
};