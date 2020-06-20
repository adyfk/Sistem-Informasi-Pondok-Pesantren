'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentDetails', {
      studentId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Students",
          key: "id",
        },
        unique: true
      },
      generationId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Generations",
          key: "id",
        },
      },
      status: Sequelize.BOOLEAN()
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentDetails');
  }
};