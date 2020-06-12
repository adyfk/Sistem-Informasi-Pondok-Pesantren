'use strict'
const faker = require('faker')
const roleId = ['1', '2', '3']

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = Array.from({ length: 3 }).map((data, index) => {
      return {
        id: roleId[index],
        title: faker.name.firstName(),
        description: faker.lorem.word()
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
