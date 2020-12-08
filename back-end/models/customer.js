const connection = require('../config/connection')

const Customer = {
  selectAll: callback => {
    const query =
      'SELECT customer_id, first_name, last_name, address, city, country, email, phone FROM customers ORDER BY customer_id ASC;'
    connection.query(query, (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  selectOne: (id, callback) => {
    const query =
      'SELECT customer_id, first_name, last_name, address, city, country, email, phone FROM customers WHERE customer_id=? ORDER BY customer_id ASC;'
    connection.execute(query, [id], (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  deleteOne: (id, callback) => {
    const query = 'DELETE FROM customers WHERE customer_id=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  insertOne: (data, callback) => {
    const query =
      'INSERT INTO customers (first_name, last_name, address, city, country, email, phone) VALUES (?,?,?,?,?,?,?)'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateOne: (data, callback) => {
    const query =
      'UPDATE customers SET first_name=?, last_name=?, address=?, city=?, country=?, email=?, phone=? WHERE customer_id=?;'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  }
}

module.exports = Customer
