const connection = require('../config/connection')

const Invoice = {
  selectOne: (id, callback) => {
    const query =
      "SELECT i.res_room_id, i.num_days, i.rate, i.payment_type, " +
        "DATE_FORMAT(rr.check_in_date, '%b %d, %Y') AS check_in_date, " +
        "DATE_FORMAT(rr.check_out_date, '%b %d, %Y') AS check_out_date, " +
        "rm.room_num, c.first_name, c.last_name FROM invoices AS i " +
        "INNER JOIN res_rooms AS rr ON i.res_room_id=rr.res_room_id " +
        "INNER JOIN reservations AS r ON rr.reservation_id=r.reservation_id " +
        "INNER JOIN customers AS c ON c.customer_id=r.customer_id " +
        "INNER JOIN rooms AS rm ON rr.room_id=rm.room_id " +
        "WHERE i.invoice_id=? LIMIT 1;"
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  selectOneId: (id, callback) => {
    const query =
      'SELECT i.invoice_id FROM invoices AS i ' +
        'INNER JOIN res_rooms AS rr ON rr.res_room_id=i.res_room_id ' +
        'WHERE rr.res_room_id=? LIMIT 1;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  insertOne: (data, callback) => {
    const query =
      'INSERT INTO invoices (res_room_id, num_days, rate, payment_type) VALUES (?,?,?,?);'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  }
}

module.exports = Invoice
