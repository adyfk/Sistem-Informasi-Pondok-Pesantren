'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BoardDocuments', {
      boardId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Boards",
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
      },
      fcNpwp: {
        allowNull: true,
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BoardDocuments');
  }
};