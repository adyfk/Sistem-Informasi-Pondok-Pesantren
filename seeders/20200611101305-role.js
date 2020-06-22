'use strict'
// const faker = require('faker')
// const roleId = ['1', '2', '3', '4']

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        id: 'R1',
        title: 'Board',
        description: '-'
      },
      {
        id: 'R2',
        title: 'Board Admin',
        description: '-'
      },
      {
        id: 'R3',
        title: 'Student',
        description: '-'
      },
      {
        id: 'R4',
        title: 'Student Admin',
        description: '-'
      },
      {
        id: 'R5',
        title: 'Bendahara Santri',
        description: '-'
      }
    ]
    return queryInterface.bulkInsert('Roles', data, {})
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
