const connection = require('../config/connection')

const Reservation = {
  selectAll: callback => {
    const query =
        "SELECT r.reservation_id, r.active, c.first_name, c.last_name, rt.type, rr.res_room_id, " +
        "DATE_FORMAT(r.created_at, '%b %d, %Y (%h:%i %p)') AS created_at, " +
        "DATE_FORMAT(rr.check_in_date, '%b %d, %Y') AS check_in_date, " +
        "DATE_FORMAT(rr.check_out_date, '%b %d, %Y') AS check_out_date FROM reservations AS r " +
        "INNER JOIN customers AS c ON r.customer_id=c.customer_id " +
        "INNER JOIN res_rooms AS rr ON r.reservation_id=rr.reservation_id " +
        "INNER JOIN room_types AS rt ON rr.room_type_id=rt.room_type_id " +
        "ORDER BY r.reservation_id ASC, rr.res_room_id ASC;"
    connection.execute(query, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  selectSome: (conditions, callback) => {
    formattedConditions = conditions.join(' && ')
    const query =
        "SELECT r.reservation_id, r.active, c.first_name, c.last_name, rt.type, rr.res_room_id, " +
        "DATE_FORMAT(r.created_at, '%b %d, %Y (%h:%i %p)') AS created_at, " +
        "DATE_FORMAT(rr.check_in_date, '%b %d, %Y') AS check_in_date, " +
        "DATE_FORMAT(rr.check_out_date, '%b %d, %Y') AS check_out_date " +
        "FROM reservations AS r " +
        "INNER JOIN customers AS c ON r.customer_id=c.customer_id " +
        "INNER JOIN res_rooms AS rr ON r.reservation_id=rr.reservation_id " +
        "INNER JOIN room_types AS rt ON rr.room_type_id=rt.room_type_id " +
        "WHERE " + formattedConditions + ' ORDER BY r.reservation_id ASC, rr.res_room_id ASC;'
    connection.execute(query, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  selectOne: (id, callback) => {
    const query =
        "SELECT r.reservation_id, r.customer_id, r.user_id, " +
        "DATE_FORMAT(r.created_at, '%b %d, %Y (%h:%i %p)') AS created_at, " +
        "r.comments, r.active, c.first_name, c.last_name, c.address, c.city, c.country, c.email, c.phone, " +
        "FROM reservations AS r " +
        "INNER JOIN customers AS c ON r.customer_id=c.customer_id " +
        "WHERE r.reservation_id=? LIMIT 1;"
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  insertOne: (id, data, callback) => {
    data.unshift(id)
    const query =
        'INSERT INTO reservations (customer_id, user_id, comments) VALUES (?,?,?);'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  cancelOne: (id, callback) => {
    const query =
        'UPDATE reservations SET active=0 WHERE reservation_id=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateOne: (data, callback) => {
    const query =
        'UPDATE reservations SET user_id=?, comments=? WHERE reservation_id=?;'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  }
}

module.exports = Reservation
