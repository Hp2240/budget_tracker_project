const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AccountRouter = require('./AccountRouter')
const TransactionRouter = require('./TransactionRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/users', UserRouter)
Router.use('/accounts', AccountRouter)
Router.use('/transactions', TransactionRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
