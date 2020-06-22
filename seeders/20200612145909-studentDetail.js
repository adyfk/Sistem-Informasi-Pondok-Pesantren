'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        studentId: 'RQ.2017.001',
        generationId: 'G1',
        status: true
      },
      {
        studentId: 'RQ.2017.002',
        generationId: 'G1',
        status: true
      },
      {
        studentId: 'RQ.2018.001',
        generationId: 'G2',
        status: true
      },
      {
        studentId: 'RQ.2019.001',
        generationId: 'G3',
        status: false
      }
    ]
    return queryInterface.bulkInsert('StudentDetails', data, {})
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
