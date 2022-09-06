const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.get('/all', controller.findAllAccounts)
Router.post('/', controller.createAccount)
