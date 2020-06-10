'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentDocuments', {
      studentId: {
        type: Sequelize.STRING,
        references: {
          model: "Students",
          key: "id",
        },
        unique: true
      },
      fcKK: {
        type: Sequelize.STRING(50)
      },
      fcKTP: {
        type: Sequelize.STRING(50)
      },
      fcAkte: {
        type: Sequelize.STRING(50)
      },
      photo: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentDocuments');
  }
};