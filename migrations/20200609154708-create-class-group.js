'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClassGroups', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      classId: {
        type: Sequelize.STRING(50)
      },
      gender:{
        type: Sequelize.STRING(2)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ClassGroups');
  }
};