'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = [
      {
        boardId: 'B1',
        fcKK: faker.lorem.word(),
        fcKTP: faker.lorem.word(),
        fcAkte: faker.lorem.word(),
        fcNpwp: faker.lorem.word(),
        photo: faker.lorem.word()
      },
      {
        boardId: 'B2',
        fcKK: faker.lorem.word(),
        fcKTP: faker.lorem.word(),
        fcAkte: faker.lorem.word(),
        fcNpwp: faker.lorem.word(),
        photo: faker.lorem.word()
      }
    ]
    return queryInterface.bulkInsert('BoardDocuments', fakeData, {})
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
