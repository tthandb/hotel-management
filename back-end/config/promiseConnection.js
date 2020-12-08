const connection = require('./connection')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)

const sessionOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  clearExpired: true,
  checkExpirationInterval: 900000,
  expiration: 7200000
}
const sessionStore = new MySQLStore(sessionOptions, connection.promise)

module.exports = sessionStore
