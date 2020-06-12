'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: 'PT1',
        title: 'Uang Gedung'
      },
      {
        id: 'PT2',
        title: 'Uang SPP'
      },
      {
        id: 'PT3',
        title: 'Lain-lain'
      }
    ]
    return queryInterface.bulkInsert('PaymentTypes', data, {})
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
