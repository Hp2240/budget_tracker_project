const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/all', controller.getAllUsers)
Router.post('/', controller.createUser)

module.exports = Router
