'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = [
      {
        id: 'RQ.2017.001',
        userId: '002',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1998, 8, 11),
        gender: 'P',
        address: faker.address.streetName(),
        dorp: 'Rambutan',
        district: 'Sragen',
        regency: 'Kabupaten Sragen',
        province: 'Jawa Tengah',
        postCode: '57211',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
      },
      {
        id: 'RQ.2017.002',
        userId: '003',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1998, 4, 11),
        gender: 'L',
        address: faker.address.streetName(),
        dorp: 'Semangka',
        district: 'Semarang Selatan',
        regency: 'Semarang',
        province: 'Jawa Tengah',
        postCode: '59222',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
      },
      {
        id: 'RQ.2018.001',
        userId: '004',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1998, 7, 11),
        gender: 'P',
        address: faker.address.streetName(),
        dorp: 'Mangga',
        district: 'Jakarta Timur',
        regency: 'Jakarta',
        province: 'DKI Jakarta',
        postCode: '57563',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
      },
      {
        id: 'RQ.2019.001',
        userId: '006',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1998, 12, 11),
        gender: 'L',
        address: faker.address.streetName(),
        dorp: 'Melon',
        district: 'Tingkir',
        regency: 'Salatiga',
        province: 'Jawa Tengah',
        postCode: '57520',
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
