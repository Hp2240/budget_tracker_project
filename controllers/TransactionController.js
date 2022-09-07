const { Transaction, Account } = require('../models')

const findAllTransactions = async (req, res) => {
  try {
    let transactions = await Transaction.findAll()
    res.send(transactions)
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllTransactions
}
