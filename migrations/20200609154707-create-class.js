'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Classes', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      title: {
        allowNull:true,
        type: Sequelize.STRING(20)
      },
      cost:{
        type: Sequelize.INTEGER()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Classes');
  }
};