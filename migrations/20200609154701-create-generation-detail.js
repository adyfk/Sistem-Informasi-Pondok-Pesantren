'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GenerationDetails', {
      id:  {
        primaryKey: true,
        type: Sequelize.STRING(50),
      },
      generationId: {
        type: Sequelize.STRING(50),
        references: {
          model: "Generations",
          key: "id",
        },
      },
      title: {
        type: Sequelize.STRING(20)
      },
      description: {
        type: Sequelize.STRING(30)
      },
      cost: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GenerationDetails');
  }
};