'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      userId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Users",
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING(50)
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING(2)
      },
      address: {
        type: Sequelize.STRING(35)
      },
      dorp: {
        type: Sequelize.STRING(25)
      },
      district: {
        type: Sequelize.STRING(25)
      },
      regency: {
        type: Sequelize.STRING(25)
      },
      province: {
        type: Sequelize.STRING(25)
      },
      postCode: {
        type: Sequelize.STRING(6)
      },
      phoneNumber: {
        type: Sequelize.STRING(25)
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING(45)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};