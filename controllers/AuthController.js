const { User } = require('../models')
const middleware = require('../middleware')

const SignIn = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { eamil: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        emial: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const SignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ username, email, passwordDigest })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const payload = res.locals
  console.log('this is the payload: ', payload)
  console.log('this is res.locals', res.locals)
  res.send(payload)
}

module.exports = {
  SignIn,
  SignUp,
  CheckSession
}
