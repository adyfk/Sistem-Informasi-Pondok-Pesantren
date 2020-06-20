'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Parents', {
      id:{
        primarykey: true,
        type: Sequelize.STRING(50)
      },
      studentId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Students",
          key: "id",
        },
        unique: true
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      dateOfBirth: {
        allowNull: true,
        type: Sequelize.DATE
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING(35)
      },
      dorp: {
        allowNull: true,
        type: Sequelize.STRING(25)
      },
      district: {
        allowNull: true,
        type: Sequelize.STRING(25)
      },
      regency: {
        allowNull: true,
        type: Sequelize.STRING(25)
      },
      province: {
        allowNull: true,
        type: Sequelize.STRING(25)
      },
      postCode: {
        allowNull: true,
        type: Sequelize.STRING(6)
      },
      phoneNumber: {
        allowNull: true,
        type: Sequelize.STRING(25)
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING(45)
      },
      fcKTP: {
        allowNull: true,
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Parents');
  }
};