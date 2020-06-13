'use strict'
const faker = require('faker')
const generationId = ['G1', 'G2']

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = Array.from({ length: 2 }).map((data, index) => {
      return {
        id: generationId[index],
        title: faker.lorem.word(),
        createdAt: new Date(2019, index + 1, 10)
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
