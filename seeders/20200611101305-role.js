'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = Array.from({ length: 10 }).map(() => {
      return {
        id: faker.random.uuid(),
        title: faker.name.firstName(),
        description: faker.lorem.words()
      }
    })
    return queryInterface.bulkInsert('Roles', fakeData, {})
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
