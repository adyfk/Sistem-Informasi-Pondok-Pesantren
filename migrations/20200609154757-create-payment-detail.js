'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PaymentDetails', {
      paymentId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Payments",
          key: "id",
        },
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING(45)
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