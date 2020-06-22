'use strict'
// const faker = require('faker')
// const generationId = ['G1', 'G2']

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: 'G1',
        title: 'Angkatan I',
        createdAt: new Date(2016, 3, 10)
      },
      {
        id: 'G2',
        title: 'Angkatan II',
        createdAt: new Date(2018, 3, 15)
      },
      {
        id: 'G3',
        title: 'Angkatan III',
        createdAt: new Date(2019, 3, 12)
      }
    ]
    return queryInterface.bulkInsert('Generations', data, {})
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
