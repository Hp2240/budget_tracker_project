const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/all', controller.getAllUsers)

module.exports = Router
