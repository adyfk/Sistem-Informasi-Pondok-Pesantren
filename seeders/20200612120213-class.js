'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: 'C1',
        title: 'Shifir',
        cost: 25000
      },
      {
        id: 'C2',
        title: 'Awaliyah I',
        cost: 25000
      },
      {
        id: 'C3',
        title: 'Awaliyah II',
        cost: 25000
      },
      {
        id: 'C4',
        title: 'Awaliyah III',
        cost: 25000
      },
      {
        id: 'C5',
        title: 'Awaliyah IV',
        cost: 25000
      },
      {
        id: 'C6',
        title: 'Awaliyah V',
        cost: 25000
      },
      {
        id: 'C7',
        title: 'Awaliyah VI',
        cost: 25000
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
