'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: '1',
        studentId: 'RQ.2017.001',
        classId: 'C1',
        studentIn: new Date(2017, 7, 15),
        studentOut: new Date(2017, 12, 20)
      },
      {
        id: '2',
        studentId: 'RQ.2017.002',
        classId: 'C1',
        studentIn: new Date(2017, 7, 15)
      },
      {
        id: '3',
        studentId: 'RQ.2017.001',
        classId: 'C2',
        studentIn: new Date(2018, 1, 10)
      },
      {
        id: '4',
        studentId: 'RQ.2018.001',
        classId: 'C1',
        studentIn: new Date(2018, 7, 15)
      },
      {
        id: '5',
        studentId: 'RQ.2019.001',
        classId: 'C1',
        studentIn: new Date(2019, 7, 15),
        studentOut: new Date(2019, 10, 10)
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
