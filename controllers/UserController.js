const { User } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    let users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const createUser = async (req, res) => {
  try {
    let user = User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllUsers,
  createUser
}
