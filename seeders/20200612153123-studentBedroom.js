'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: '1',
        studentId: 'RQ.2017.001',
        bedroomId: 'BR1',
        studentIn: new Date(2017, 7, 13),
        studentOut: new Date()
      },
      {
        id: '2',
        studentId: 'RQ.2017.002',
        bedroomId: 'BR2',
        studentIn: new Date(2017, 7, 13)
      },
      {
        id: '3',
        studentId: 'RQ.2018.001',
        bedroomId: 'BR1',
        studentIn: new Date(2018, 7, 13)
      },
      {
        id: '4',
        studentId: 'RQ.2019.001',
        bedroomId: 'BR2',
        studentIn: new Date(2019, 7, 13),
        studentOut: new Date(2019, 10, 10)
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
