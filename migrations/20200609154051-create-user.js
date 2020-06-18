'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      username: {
        type: Sequelize.STRING(50),
        unique: true
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      roleId: {
        allowNull: true,
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