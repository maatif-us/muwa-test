import passportLocal from 'passport-local'

import UserModel from '../../models/User.js'

const LocalStrategy = passportLocal.Strategy

export const localStrategyLogin = new LocalStrategy(
  {
    usernameField: 'email'
  },
  async (email, password, done) => {
    // verify function as per documentation
    const user = await UserModel.findOne({ email })
    if (!user) {
      return done(null, false, { message: 'User not found' })
    }
    try {
      const isPasswordValid = await user.isValidPassword(password)
      if (!isPasswordValid) {
        return done(null, false, { message: "password didn't match" })
      } else {
        console.log('login sucessfull')
        return done(null, { id: user.id, username: user.username, email: user.email }, { message: 'logged in successfully' })
      }
    } catch (error) {
      done(error)
    }
  }
)
