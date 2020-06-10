'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Parents', {
      studentId: {
        type: Sequelize.STRING,
        references: {
          model: "Students",
          key: "id",
        },
        unique: true
      },
      name: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      dorp: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      regency: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      postCode: {
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      fcKTP: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Parents');
  }
};