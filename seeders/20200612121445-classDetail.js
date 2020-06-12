'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: '1',
        classId: 'C1',
        cost: 25000,
        createdAt: new Date(2015, 4, 10)
      },
      {
        id: '2',
        classId: 'C2',
        cost: 25000,
        createdAt: new Date(2015, 4, 10)
      },
      {
        id: '3',
        classId: 'C3',
        cost: 25000,
        createdAt: new Date(2015, 4, 10)
      },
      {
        id: '4',
        classId: 'C4',
        cost: 25000,
        createdAt: new Date(2015, 4, 10)
      },
      {
        id: '5',
        classId: 'C5',
        cost: 25000,
        createdAt: new Date(2015, 4, 10)
      },
      {
        id: '6',
        classId: 'C6',
        cost: 25000,
        createdAt: new Date(2015, 4, 10)
      },
      {
        id: '7',
        classId: 'C7',
        cost: 25000,
        createdAt: new Date(2015, 4, 10)
      },
      {
        id: '8',
        classId: 'C7',
        cost: 35000,
        createdAt: new Date(2017, 4, 25)
      }
    ]
    return queryInterface.bulkInsert('ClassDetails', data, {})
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
