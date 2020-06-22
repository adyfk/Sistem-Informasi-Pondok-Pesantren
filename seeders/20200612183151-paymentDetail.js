'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        paymentId: 'PY1',
        description: '',
        paid: 50000
      },
      {
        paymentId: 'PY2',
        description: '',
        paid: 280000
      },
      {
        paymentId: 'PY2',
        description: '',
        paid: 325000
      },
      {
        paymentId: 'PY2',
        description: '',
        paid: 50000
      }
    ]
    return queryInterface.bulkInsert('PaymentDetails', data, {})
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
