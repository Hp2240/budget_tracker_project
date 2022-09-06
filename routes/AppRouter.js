const Router = require('express').Router()
const UserRouter = require('./UserRouter')

Router.use('/users', UserRouter)
Router.use('/accounts', UserRouter)
module.exports = Router
