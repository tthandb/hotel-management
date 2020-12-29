const userPassport = require('../models/userPassport.js')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

module.exports = passport => {
  passport.serializeUser((user, callback) => {
    callback(null, user.user_id)
  })
  passport.deserializeUser((id, callback) => {
    userPassport.getUserById(id, (err, data) => {
      callback(err, data)
    })
  })
  passport.use(
      new LocalStrategy(
          {passReqToCallback: true},
          (req, username, password, callback) => {
            if (!req.user && (!username === '' || password.length >= 5)) {
              userPassport.getUserByUsernameWithPassword(username, (err, user) => {
                if (err) {
                  return callback(err)
                } else if (!user) {
                  return callback(null, false, {
                    message: `No username found that matches ${username}`
                  })
                } else {
                  bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                      callback(err)
                    } else if (result) {
                      delete user.password
                      callback(null, user)
                    } else {
                      callback(null, false, {message: 'incorrect password'})
                    }
                  })
                }
              })
            } else if (req.user) {
              callback(null, req.user)
            } else {
              return callback(null, false, {
                message: 'Username and password must match input requirements'
              })
            }
          }
      )
  )
}
