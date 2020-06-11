'use strict'
const faker = require('faker')
const generationId = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = Array.from({ length: 10 }).map((data, index) => {
      return {
        id: generationId[index],
        title: faker.lorem.word()
      }
    })
    return queryInterface.bulkInsert('Generations', fakeData, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
}
