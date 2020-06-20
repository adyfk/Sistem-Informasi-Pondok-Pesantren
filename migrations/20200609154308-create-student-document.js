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
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      fcKTP: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      fcAkte: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentDocuments');
  }
};