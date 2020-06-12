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
        type: Sequelize.STRING(50)
      },
      dateOfBirth: {
        type: Sequelize.DATE
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
        type: Sequelize.STRING(15)
      },
      email: {
        type: Sequelize.STRING(30)
      },
      fcKTP: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Parents');
  }
};