'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.renameColumn(
      'users',
      'password',
      'passwordDigest'
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.renameColumn(
      'users',
      'password',
      'passwordDigest'
    )
  }
}
