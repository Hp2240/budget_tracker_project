'use strict'

const { query } = require('express')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      'transactions',
      'tansactionNumber',
      'transactionNumber'
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      'ttransactions',
      'transactionNumber',
      'tansactionNumber'
    )
  }
}
