const { Transaction, Account } = require('../models')

const findAllTransactions = async (req, res) => {
  try {
    let transactions = await Transaction.findAll()
    res.send(transactions)
  } catch (error) {
    throw error
  }
}

const findTransactionByAccount = async (req, res) => {
  try {
    let accountId = parseInt(req.params.accountId)
    let transaction = await Transaction.findAll({
      where: { accountId: accountId },
      include: [{ model: Account }]
    })
    res.send(transaction)
  } catch (error) {
    throw error
  }
}

const createTransaction = async (req, res) => {
  try {
    let accountId = parseInt(req.body.accountId)
    let transaction = await Transaction.create({
      ...req.body,
      accountId
    })
    res.send(transaction)
  } catch (error) {
    throw error
  }
}

const updateTransaction = async (req, res) => {
  try {
    let transactionId = parseInt(req.params.transactionId)
    let transaction = await Transaction.update(req.body, {
      where: { id: transactionId },
      returning: true
    })
    res.send(transaction)
  } catch (error) {
    throw error
  }
}

const deleteTransaction = async (req, res) => {
  try {
    let transactionId = parseInt(req.params.transactionId)
    await Transaction.destroy({
      where: { id: transactionId }
    })
    res.send({ message: `Deleted transaction with an id of ${transactionId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllTransactions,
  findTransactionByAccount,
  createTransaction,
  updateTransaction,
  deleteTransaction
}
