'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RoleDetails', {
      id:  {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.STRING,
        references: {
          model: "Roles",
          key: "id",
        },
      },
      appId: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RoleDetails');
  }
};