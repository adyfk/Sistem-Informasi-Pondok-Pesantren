'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: '1',
        generationId: 'G1',
        title: 'Pendaftaran',
        description: 'Pendaftaran angkatan I',
        cost: 30000
      },
      {
        id: '2',
        generationId: 'G1',
        title: 'Bangunan',
        description: 'Bangunan angkatan I',
        cost: 500000
      },
      {
        id: '3',
        generationId: 'G1',
        title: 'Seragam',
        description: 'Seragam angkatan I',
        cost: 250000
      },
      {
        id: '4',
        generationId: 'G2',
        title: 'Pendaftaran',
        description: 'Pendaftaran angkatan II',
        cost: 30000
      },
      {
        id: '5',
        generationId: 'G2',
        title: 'Bangunan',
        description: 'Bangunan angkatan II',
        cost: 550000
      },
      {
        id: '6',
        generationId: 'G2',
        title: 'Seragam',
        description: 'Seragam angkatan II',
        cost: 265000
      }
    ]
    return queryInterface.bulkInsert('GenerationDetails', data, {})
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
