'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: 'BR1',
        title: 'Melati',
        gender: 'P',
        capacity: 10
      },
      {
        id: 'BR2',
        title: 'Jerapaj',
        gender: 'L',
        capacity: 10
      }
    ]
    return queryInterface.bulkInsert('Bedrooms', data, {})
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
