'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentBedrooms', {
      id:  {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      studentId: {
        type: Sequelize.STRING,
        references: {
          model: "Students",
          key: "id",
        },
      },
      studentIn: {
        type: Sequelize.DATE
      },
      studentOut: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentBedrooms');
  }
};