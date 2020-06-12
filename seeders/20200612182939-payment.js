'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: 'PY1',
        studentId: 'S1',
        paymentTypeId: 'PT1',
        description: '',
        bill: 9000000
      },
      {
        id: 'PY2',
        studentId: 'S1',
        paymentTypeId: 'PT2',
        description: '',
        bill: 8000000
      }
    ]
    return queryInterface.bulkInsert('Payments', data, {})
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
