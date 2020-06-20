'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        studentId: 'S1',
        generationId: 'G1',
        status: true
      },
      {
        studentId: 'S2',
        generationId: 'G1',
        status: true
      },
      {
        studentId: 'S3',
        generationId: 'G2',
        status: true
      },
      {
        studentId: 'S4',
        generationId: 'G1',
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
