'use strict';
// const data = require('../data/questions.json')
const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = JSON.parse(fs.readFileSync('./data/questions.json', 'utf-8'))
    for (let i of data) {
      i.createdAt = new Date()
      i.updatedAt = new Date()
    }
    await queryInterface.bulkInsert('Questions', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('Questions', null, {})
  }
};
