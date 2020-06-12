'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    // const fakeData = Array.from({ length: 10 }).map((data, index) => {
    //   return {
    //     id: userId[index],
    //     username: faker.internet.userName(),
    //     password: faker.internet.password(),
    //     roleId: roleId[Math.floor(Math.random() * 2)]
    //   }
    // })
    const fakeData = [
      {
        id: '123',
        username: faker.internet.userName(),
        password: '12345',
        roleId: '1'
      },
      {
        id: '1235',
        username: faker.internet.userName(),
        password: '12345',
        roleId: '2'
      },
      {
        id: '1234',
        username: faker.internet.userName(),
        password: '12345',
        roleId: '3'
      },
      {
        id: '12345',
        username: faker.internet.userName(),
        password: '12345',
        roleId: '2'
      }
    ]
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
