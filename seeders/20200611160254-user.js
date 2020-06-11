'use strict'
const faker = require('faker')

const roleId = ['1', '2', '3']
const userId = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '10']

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = Array.from({ length: 10 }).map((data, index) => {
      return {
        id: userId[index],
        username: faker.internet.userName(),
        password: faker.internet.password(),
        roleId: roleId[Math.floor(Math.random() * 2)]
      }
    })
    return queryInterface.bulkInsert('Users', fakeData, {})
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
