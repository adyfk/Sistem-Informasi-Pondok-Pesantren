'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        userId: '001',
        latestLogin: new Date(2020, 6, 11)
      },
      {
        userId: '002',
        latestLogin: new Date(2020, 6, 11)
      },
      {
        userId: '003',
        latestLogin: new Date(2020, 6, 11)
      },
      {
        userId: '004',
        latestLogin: new Date(2020, 6, 12)
      },
      {
        userId: '005',
        latestLogin: new Date(2020, 6, 12)
      },
      {
        userId: '006',
        latestLogin: new Date(2019, 9, 30)
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
