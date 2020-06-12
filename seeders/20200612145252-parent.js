'use strict'
const faker = require('faker')
const { fake } = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = [
      {
        id: 'P1',
        studentId: 'S1',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1988, 6, 11).toJSON(),
        address: faker.address.streetName(),
        dorp: faker.lorem.word(),
        district: faker.address.cityPrefix(),
        regency: faker.address.city(),
        province: faker.address.county(),
        postalCode: '57282',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        fcKTP: faker.lorem.word()
      },
      {
        id: 'P2',
        studentId: 'S2',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1985, 2, 11).toJSON(),
        address: faker.address.streetName(),
        dorp: faker.lorem.word(),
        district: faker.address.cityPrefix(),
        regency: faker.address.city(),
        province: faker.address.county(),
        postalCode: '59222',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        fcKTP: faker.lorem.word()
      },
      {
        id: 'P3',
        studentId: 'S3',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1975, 8, 3).toJSON(),
        address: faker.address.streetName(),
        dorp: faker.lorem.word(),
        district: faker.address.cityPrefix(),
        regency: faker.address.city(),
        province: faker.address.county(),
        postalCode: '57522',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        fcKTP: faker.lorem.word()
      }
    ]
    return queryInterface.bulkInsert('Parents', fakeData, {})
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
