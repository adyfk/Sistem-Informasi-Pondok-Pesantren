'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
        
      },
      studentId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Students",
          key: "id",
        },
      },
      paymentTypeId: {
        type: Sequelize.STRING(50),
        references: {
          model: "PaymentTypes",
          key: "id",
        },
      },
      description: {
        type: Sequelize.STRING(30)
      },
      bill: {
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
    return queryInterface.dropTable('Payments');
  }
};