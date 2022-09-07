const Router = require('express').Router()
const controller = require('../controllers/TransactionController')

Router.get('/all', controller.findAllTransactions)

module.exports = Router
