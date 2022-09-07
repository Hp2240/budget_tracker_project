const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AccountRouter = require('./AccountRouter')

Router.use('/users', UserRouter)
Router.use('/accounts', AccountRouter)
module.exports = Router
