const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AccountRouter = require('./AccountRouter')
const TransactionRouter = require('./TransactionRouter')

Router.use('/users', UserRouter)
Router.use('/accounts', AccountRouter)
Router.use('/transactions', TransactionRouter)

module.exports = Router
