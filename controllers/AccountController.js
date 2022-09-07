const { Account, User } = require('../models')

const findAllAccounts = async (req, res) => {
  try {
    let accounts = await Account.findAll()
    res.send(accounts)
  } catch (error) {
    throw error
  }
}

const findAccountsByUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let accounts = await Account.findAll({
      where: { userId: userId },
      include: [{ model: User }]
    })
    res.send(accounts)
  } catch (error) {
    throw error
  }
}

const createAccount = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let account = await Account.create({
      ...req.body,
      userId
    })
    res.send(account)
  } catch (error) {
    throw error
  }
}

const updateAccount = async (req, res) => {
  try {
    let accountId = parseInt(req.params.accountId)
    let account = await Account.update(req.body, {
      where: { id: accountId },
      returning: true
    })
    res.send(account)
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllAccounts,
  findAccountsByUser,
  createAccount,
  updateAccount
}
