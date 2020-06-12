'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: 'C1',
        title: 'Shifir'
      },
      {
        id: 'C2',
        title: 'Awaliyah I'
      },
      {
        id: 'C3',
        title: 'Awaliyah II'
      },
      {
        id: 'C4',
        title: 'Awaliyah III'
      },
      {
        id: 'C5',
        title: 'Awaliyah IV'
      },
      {
        id: 'C6',
        title: 'Awaliyah V'
      },
      {
        id: 'C7',
        title: 'Awaliyah VI'
      }
    ]
    return queryInterface.bulkInsert('Classes', data, {})
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
