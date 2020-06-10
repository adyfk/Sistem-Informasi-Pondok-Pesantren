'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentDetails', {
      studentId: {
        type: Sequelize.STRING,
        references: {
          model: "Students",
          key: "id",
        },
      },
      generationId: {
        type: Sequelize.STRING,
        references: {
          model: "Generations",
          key: "id",
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentDetails');
  }
};