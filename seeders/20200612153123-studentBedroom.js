'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: '1',
        studentId: 'S1',
        bedroomId: 'BR1',
        studentIn: new Date(2019, 7, 13)
      },
      {
        id: '2',
        studentId: 'S2',
        bedroomId: 'BR2',
        studentIn: new Date(2019, 7, 13)
      },
      {
        id: '3',
        studentId: 'S3',
        bedroomId: 'BR1',
        studentIn: new Date(2020, 7, 13)
      }
    ]
    return queryInterface.bulkInsert('StudentBedrooms', data, {})
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
