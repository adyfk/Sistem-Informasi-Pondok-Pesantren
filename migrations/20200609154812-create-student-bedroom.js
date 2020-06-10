'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentBedrooms', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50)
      },
      studentId: {
        type: Sequelize.STRING(50),
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