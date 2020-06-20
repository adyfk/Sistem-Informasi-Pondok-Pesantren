'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = [
      {
        studentId: 'S1',
        fcKK: faker.lorem.word(),
        fcKTP: faker.lorem.word(),
        fcAkte: faker.lorem.word()
      },
      {
        studentId: 'S2',
        fcKK: faker.lorem.word(),
        fcKTP: faker.lorem.word(),
        fcAkte: faker.lorem.word()
      },
      {
        studentId: 'S3',
        fcKK: faker.lorem.word(),
        fcKTP: faker.lorem.word(),
        fcAkte: faker.lorem.word()
      },
      {
        studentId: 'S4',
        fcKK: faker.lorem.word(),
        fcKTP: faker.lorem.word(),
        fcAkte: faker.lorem.word()
      }
    ]
    return queryInterface.bulkInsert('StudentDocuments', fakeData, {})
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
