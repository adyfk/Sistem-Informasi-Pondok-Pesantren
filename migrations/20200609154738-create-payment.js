'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      id:  {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.STRING,
        
      },
      studentId: {
        type: Sequelize.STRING
      },
      paymentType: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
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