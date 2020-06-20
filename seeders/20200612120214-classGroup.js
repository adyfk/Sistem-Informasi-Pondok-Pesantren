'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: '1',
        classId: 'C1',
        gender: 'L'
      },
      {
        id: '2',
        classId: 'C1',
        gender: 'L'
      },
      {
        id: '3',
        classId: 'C2',
        gender: 'L'
      },
      {
        id: '4',
        classId: 'C2',
        gender: 'P'
      }
    ]
    return queryInterface.bulkInsert('ClassGroups', data, {})
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
