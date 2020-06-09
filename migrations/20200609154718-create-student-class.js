'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentClasses', {
      id:  {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.STRING,
        
      },
      studentId: {
        type: Sequelize.STRING
      },
      classId: {
        type: Sequelize.STRING
      },
      studentIn: {
        type: Sequelize.DATE
      },
      studentOut: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentClasses');
  }
};