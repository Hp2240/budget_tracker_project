const { Account, User } = require('../models')
const account = require('../models/account')

const findAllAccounts = async (req, res) => {
  try {
    let accounts = await Account.findAll()
    res.send(accounts)
  } catch (error) {
    throw error
  }
}

const createAccount = async (req, res) => {
  try {
    let userId = parseInt(req.body.userId)
    let account = await Account.create({
      ...req.body,
      userId
    })
    res.send(account)
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllAccounts,
  createAccount
}
