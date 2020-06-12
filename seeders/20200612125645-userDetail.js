'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        userId: '001',
        latestLogin: new Date(2020, 6, 11).toJSON()
      },
      {
        userId: '002',
        latestLogin: new Date(2020, 6, 11).toJSON()
      },
      {
        userId: '003',
        latestLogin: new Date(2020, 6, 11).toJSON()
      },
      {
        userId: '003',
        latestLogin: new Date(2020, 6, 12).toJSON()
      }
    ]
    return queryInterface.bulkInsert('UserDetails', data, {})
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
