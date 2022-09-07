const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.get('/all', controller.findAllAccounts)
Router.get('/:userId', controller.findAccountsByUser)
Router.post('/', controller.createAccount)
Router.put('/:accountId', controller.updateAccount)
module.exports = Router
