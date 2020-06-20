'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: '1',
        studentId: 'S1',
        classId: 'C1',
        studentIn: new Date(2019, 7, 15),
        studentOut: new Date(2019, 12, 20)
      },
      {
        id: '2',
        studentId: 'S2',
        classId: 'C1',
        studentIn: new Date(2019, 7, 15)
      },
      {
        id: '3',
        studentId: 'S1',
        classId: 'C2',
        studentIn: new Date(2020, 1, 10)
      },
      {
        id: '4',
        studentId: 'S3',
        classId: 'C1',
        studentIn: new Date(2020, 7, 15)
      },
      {
        id: '5',
        studentId: 'S4',
        classId: 'C1',
        studentIn: new Date(2020, 7, 15),
        studentOut: new Date(2020, 10, 10)
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
