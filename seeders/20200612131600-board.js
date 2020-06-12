'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = [
      {
        id: 'B1',
        userId: '001',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1988, 6, 11).toJSON(),
        gender: 'P',
        address: faker.address.streetName(),
        dorp: faker.lorem.word(),
        district: faker.address.cityPrefix(),
        regency: faker.address.city(),
        province: faker.address.county(),
        postalCode: '57222',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
      },
      {
        id: 'B2',
        userId: '005',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1985, 11, 11).toJSON(),
        gender: 'L',
        address: faker.address.streetName(),
        dorp: faker.lorem.word(),
        district: faker.address.cityPrefix(),
        regency: faker.address.city(),
        province: faker.address.county(),
        postalCode: '57237',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
      }
    ]
    return queryInterface.bulkInsert('Boards', fakeData, {})
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
