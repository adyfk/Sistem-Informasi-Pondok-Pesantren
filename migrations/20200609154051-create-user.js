'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      username: {
        type: Sequelize.STRING(20)
      },
      password: {
        type: Sequelize.STRING(20)
      },
      roleId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Roles",
          key: "id",
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};