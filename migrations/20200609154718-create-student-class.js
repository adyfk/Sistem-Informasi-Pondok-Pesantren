'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentClasses', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      studentId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Students",
          key: "id",
        },
      },
      classId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Classes",
          key: "id",
        },
      },
      studentIn: {
        allowNull:true,
        type: Sequelize.DATE
      },
      studentOut: {
        allowNull:true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentClasses');
  }
};