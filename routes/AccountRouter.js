const Router = require('express').Router()
const controller = require('../controllers/AccountController')
const middleware = require('../middleware')

Router.get('/all', controller.findAllAccounts)
Router.get('/:userId', controller.findAccountsByUser)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createAccount
)
Router.put(
  '/:accountId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateAccount
)
Router.delete(
  '/:accountId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteAccount
)

module.exports = Router
