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

const updateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let user = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    await User.destroy({
      where: { id: userId }
    })
    res.send({ message: `Deleted user with an id of ${userId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
}
