'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        studentId: 'S1',
        generationId: 'G1'
      },
      {
        studentId: 'S2',
        generationId: 'G1'
      },
      {
        studentId: 'S3',
        generationId: 'G2'
      }
    ]
    return queryInterface.bulkInsert('StudentsDetails', data, {})
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
