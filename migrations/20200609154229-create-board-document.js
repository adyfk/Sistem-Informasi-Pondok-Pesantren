'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BoardDocuments', {
      boardId: {
        type: Sequelize.STRING
      },
      fcKK: {
        type: Sequelize.STRING
      },
      fcKTP: {
        type: Sequelize.STRING
      },
      fcAkte: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      npwp: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BoardDocuments');
  }
};