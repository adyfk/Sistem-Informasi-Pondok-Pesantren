'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClassDetails', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50)
      },
      classId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Classes",
          key: "id",
        },
      },
      cost: Sequelize.INTEGER,
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ClassDetails');
  }
};