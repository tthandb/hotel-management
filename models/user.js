const connection = require('../config/connection')

const User = {
  selectAll: callback => {
    const query =
        'SELECT u.user_id, u.username, u.access_id, a.type FROM users AS u ' +
        'INNER JOIN access_levels AS a ON u.access_id=a.access_id ' +
        'ORDER BY u.user_id ASC;'
    connection.query(query, (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  selectOneById: (id, callback) => {
    const query =
        'SELECT u.user_id, u.username, u.access_id, a.type FROM users AS u ' +
        'INNER JOIN access_levels AS a ON u.access_id=a.access_id ' +
        'WHERE user_id=? LIMIT 1;'
    connection.execute(query, [id], (err, results, fields) => {
      if (err) throw err
      callback(results)
    })
  },
  selectOneByUsername: (username, callback) => {
    const query =
        'SELECT u.user_id, u.username, u.access_id, a.type FROM users AS u ' +
        'INNER JOIN access_levels AS a ON u.access_id=a.access_id WHERE username=? LIMIT 1;'
    connection.execute(query, [username], (err, results, fields) => {
      if (err) throw err
      callback(results)
    })
  },
  deleteOne: (id, callback) => {
    const query = 'DELETE FROM users WHERE user_id=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  insertOne: (data, callback) => {
    const query =
        'INSERT INTO users (username, password, access_id) VALUES (?,?,?)'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateOne: (data, id, callback) => {
    data.push(id)
    const query =
        'UPDATE users SET username=?, password=?, access_id=? WHERE user_id=?;'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  }
}

module.exports = User
