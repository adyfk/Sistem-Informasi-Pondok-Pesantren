'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: '1',
        studentId: 'S1',
        classGroupId: '2',
        studentIn: new Date(2019, 7, 15),
        studentOut: new Date(2019, 12, 20)
      },
      {
        id: '2',
        studentId: 'S2',
        classGroupId: '1',
        studentIn: new Date(2019, 7, 15)
      },
      {
        id: '3',
        studentId: 'S1',
        classGroupId: '4',
        studentIn: new Date(2020, 1, 10)
      },
      {
        id: '4',
        studentId: 'S3',
        classGroupId: '2',
        studentIn: new Date(2020, 7, 15)
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
