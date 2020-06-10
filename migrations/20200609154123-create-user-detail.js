'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserDetails', {
      userId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Users",
          key: "id",
        },
      },
      latestLogin: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserDetails');
  }
};