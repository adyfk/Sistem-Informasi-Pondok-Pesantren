'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: 'PY1',
        studentId: 'RQ.2017.001',
        paymentTypeId: 'PT1',
        description: '',
        bill: 780000
      },
      {
        id: 'PY2',
        studentId: 'RQ.2017.001',
        paymentTypeId: 'PT2',
        description: '',
        bill: 325000
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
