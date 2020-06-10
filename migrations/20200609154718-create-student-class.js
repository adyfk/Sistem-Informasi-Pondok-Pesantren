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
        type: Sequelize.STRING,
        references: {
          model: "Students",
          key: "id",
        },
      },
      classId: {
        type: Sequelize.STRING,
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