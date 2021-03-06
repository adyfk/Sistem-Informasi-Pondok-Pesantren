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
        id: '001',
        username: faker.internet.userName(),
        password: '123456',
        roleId: 'R1'
      },
      {
        id: '002',
        username: faker.internet.userName(),
        password: '123456',
        roleId: 'R2'
      },
      {
        id: '003',
        username: faker.internet.userName(),
        password: '123456',
        roleId: 'R3'
      },
      {
        id: '004',
        username: faker.internet.userName(),
        password: '123456',
        roleId: 'R2'
      },
      {
        id: '005',
        username: faker.internet.userName(),
        password: '123456',
        roleId: 'R1'
      },
      {
        id: '006',
        username: faker.internet.userName(),
        password: '123456',
        roleId: 'R4'
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
