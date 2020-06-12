'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Boards', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      userId: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "id",
        },
        unique: true
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
        type: Sequelize.STRING(30)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Boards');
  }
};