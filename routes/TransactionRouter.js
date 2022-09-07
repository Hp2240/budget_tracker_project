const Router = require('express').Router()
const controller = require('../controllers/TransactionController')

Router.get('/all', controller.findAllTransactions)
Router.get('/:accountId', controller.findTransactionByAccount)
Router.post('/', controller.createTransaction)
Router.put('/:transactionId', controller.updateTransaction)
Router.delete('/:transactionId', controller.deleteTransaction)

module.exports = Router
