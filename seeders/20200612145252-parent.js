'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = [
      {
        id: 'P1',
        studentId: 'RQ.2017.001',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1988, 6, 11),
        address: faker.address.streetName(),
        dorp: 'Rambutan',
        district: 'Sragen',
        regency: 'Kabupaten Sragen',
        province: 'Jawa Tengah',
        postCode: '57211',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        fcKTP: faker.lorem.word()
      },
      {
        id: 'P2',
        studentId: 'RQ.2017.002',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1985, 2, 11),
        address: faker.address.streetName(),
        dorp: 'Semangka',
        district: 'Semarang Selatan',
        regency: 'Semarang',
        province: 'Jawa Tengah',
        postCode: '59222',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        fcKTP: faker.lorem.word()
      },
      {
        id: 'P3',
        studentId: 'RQ.2018.001',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1975, 8, 3),
        address: faker.address.streetName(),
        dorp: 'Mangga',
        district: 'Jakarta Timur',
        regency: 'Jakarta',
        province: 'DKI Jakarta',
        postCode: '57563',
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        fcKTP: faker.lorem.word()
      },
      {
        id: 'P4',
        studentId: 'RQ.2019.001',
        name: faker.internet.userName(),
        dateOfBirth: new Date(1975, 8, 3),
        address: faker.address.streetName(),
        dorp: 'Melon',
        district: 'Tingkir',
        regency: 'Salatiga',
        province: 'Jawa Tengah',
        postCode: '57520',
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
