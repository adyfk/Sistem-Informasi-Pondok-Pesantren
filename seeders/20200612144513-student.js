'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = [
      {
        id: 'S1',
        userId: '002',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1998, 8, 11).toJSON(),
        gender: 'P',
        address: faker.address.streetName(),
        dorp: faker.lorem.word(),
        district: faker.address.cityPrefix(),
        regency: faker.address.city(),
        province: faker.address.county(),
        postalCode: '57282',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
      },
      {
        id: 'S2',
        userId: '003',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1998, 4, 11).toJSON(),
        gender: 'L',
        address: faker.address.streetName(),
        dorp: faker.lorem.word(),
        district: faker.address.cityPrefix(),
        regency: faker.address.city(),
        province: faker.address.county(),
        postalCode: '59222',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
      },
      {
        id: 'S3',
        userId: '004',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1998, 7, 11).toJSON(),
        gender: 'P',
        address: faker.address.streetName(),
        dorp: faker.lorem.word(),
        district: faker.address.cityPrefix(),
        regency: faker.address.city(),
        province: faker.address.county(),
        postalCode: '57522',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
      }
    ]
    return queryInterface.bulkInsert('Students', fakeData, {})
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
