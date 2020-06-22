'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = [
      {
        studentId: 'RQ.2017.001',
        fcKK: faker.lorem.word(),
        fcKTP: faker.lorem.word(),
        fcAkte: faker.lorem.word()
      },
      {
        studentId: 'RQ.2017.002',
        fcKK: faker.lorem.word(),
        fcKTP: faker.lorem.word(),
        fcAkte: faker.lorem.word()
      },
      {
        studentId: 'RQ.2018.001',
        fcKK: faker.lorem.word(),
        fcKTP: faker.lorem.word(),
        fcAkte: faker.lorem.word()
      },
      {
        studentId: 'RQ.2019.001',
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
