const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/all', controller.getAllUsers)
Router.post('/', controller.createUser)
Router.put('/:userId', controller.updateUser)
Router.delete('/:userId', controller.deleteUser)

module.exports = Router
