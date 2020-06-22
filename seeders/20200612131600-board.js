'use strict'
// const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: 'B1',
        userId: '001',
        name: 'Sri',
        dateOfBirth: new Date(1988, 6, 11),
        gender: 'P',
        address: 'Jalan Mawar No. 15',
        dorp: 'Karang Tengah',
        district: 'Semarang Barat',
        regency: 'Semarang',
        province: 'Jawa Tengah',
        postCode: '57222',
        phoneNumber: '081345765890',
        email: 'sri@gmail.com'
      },
      {
        id: 'B2',
        userId: '005',
        name: 'Joko',
        dateOfBirth: new Date(1985, 11, 11),
        gender: 'L',
        address: 'Jalan Srikandi No. 29',
        dorp: 'Plombokan',
        district: 'Semarang Tengah',
        regency: 'Semarang',
        province: 'Jawa Tengah',
        postCode: '57215',
        phoneNumber: '089763452890',
        email: 'joko@SpeechGrammarList.com'
      }
    ]
    return queryInterface.bulkInsert('Boards', data, {})
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
