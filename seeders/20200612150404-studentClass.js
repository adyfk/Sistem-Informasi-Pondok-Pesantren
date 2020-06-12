'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: '1',
        studentId: 'S1',
        classId: 'C1',
        studentIn: new Date(2019, 7, 15).toJSON(),
        studentOut: new Date(2019, 12, 20).toJSON()
      },
      {
        id: '2',
        studentId: 'S2',
        classId: 'C1',
        studentIn: new Date(2019, 7, 15).toJSON()
      },
      {
        id: '3',
        studentId: 'S1',
        classId: 'C2',
        studentIn: new Date(2020, 1, 10).toJSON()
      },
      {
        id: '3',
        studentId: 'S3',
        classId: 'C1',
        studentIn: new Date(2020, 7, 15).toJSON()
      }
    ]
    return queryInterface.bulkInsert('StudentClasses', data, {})
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
