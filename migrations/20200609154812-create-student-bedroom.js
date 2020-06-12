'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentBedrooms', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50)
      },
      studentId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Students",
          key: "id",
        },
      },
      bedroomId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Bedrooms",
          key: "id",
        },
      },
      studentIn: {
        type: Sequelize.DATE
      },
      studentOut: {
        allowNull:true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentBedrooms');
  }
};