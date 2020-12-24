const connection = require('../config/connection')

const ReservationRoom = {
  selectForHouseStatus: (date, callback) => {
    const preQueryString = 'SET @input_date=?;'
    const query =
        'SELECT ' +
        'COALESCE(SUM(CASE WHEN rr.check_in_date<@input_date && rr.check_out_date>@input_date THEN 1 ELSE 0 END), 0) AS stayovers, ' +
        'COALESCE(SUM(CASE WHEN rr.check_out_date=@input_date && rr.checked_out=0 THEN 1 ELSE 0 END), 0) AS departuresPending, ' +
        'COALESCE(SUM(CASE WHEN rr.check_out_date=@input_date && rr.checked_out=1 THEN 1 ELSE 0 END), 0) AS departuresActual, ' +
        'COALESCE(SUM(CASE WHEN rr.check_in_date=@input_date && rr.checked_in=0 && rr.active=1 THEN 1 ELSE 0 END), 0) AS arridataPending, ' +
        'COALESCE(SUM(CASE WHEN rr.check_in_date=@input_date && rr.checked_in=1 THEN 1 ELSE 0 END), 0) AS arridataActual FROM res_rooms AS rr ' +
        'WHERE rr.active=1 && ' +
        '(rr.check_in_date<@input_date && rr.check_out_date>@input_date) ' +
        '|| rr.check_out_date=@input_date || rr.check_in_date=@input_date;'
    connection.query(preQueryString + query, [date],
        (err, result) => {
          if (err) throw err
          callback(result[1])
        })
  },
  selectArrivals: (conditions, callback) => {
    const formattedConditions = conditions.join(' && ')
    const query =
        "SELECT r.reservation_id, CONCAT(c.first_name, ' ', c.last_name) AS name, " +
        "rr.res_room_id, rr.room_type_id, " +
        "DATE_FORMAT(rr.check_in_date, '%b %d, %Y') AS check_in_date, " +
        "DATE_FORMAT(rr.check_out_date, '%b %d, %Y') AS check_out_date, " +
        "rr.checked_in, rr.checked_out, IFNULL(rm.room_num, 'Not Set') AS room_num, " +
        "rt.type, '' AS selectedRoom FROM reservations AS r " +
        "INNER JOIN customers AS c ON r.customer_id=c.customer_id " +
        "INNER JOIN res_rooms AS rr ON r.reservation_id=rr.reservation_id " +
        "INNER JOIN room_types AS rt ON rr.room_type_id=rt.room_type_id " +
        "LEFT JOIN rooms AS rm ON rr.room_id=rm.room_id WHERE rr.active=1 && " +
        formattedConditions +
        ' ORDER BY rr.res_room_id ASC;'
    connection.query(query, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  selectDepartures: (conditions, callback) => {
    formattedConditions = conditions.join(' && ')
    const query =
        "SELECT r.reservation_id, CONCAT(c.first_name, ' ', c.last_name) AS name, " +
        "rr.res_room_id, rr.room_type_id, DATE(check_out_date)-DATE(check_in_date) AS num_days, " +
        "DATE_FORMAT(rr.check_in_date, '%b %d, %Y') AS check_in_date, " +
        "DATE_FORMAT(rr.check_out_date, '%b %d, %Y') AS check_out_date, " +
        "rr.checked_in, rr.checked_out, rr.rate, " +
        "IFNULL(rm.room_num, 'Not Set') AS room_num, rt.type FROM reservations AS r " +
        "INNER JOIN customers AS c ON r.customer_id=c.customer_id " +
        "INNER JOIN res_rooms AS rr ON r.reservation_id=rr.reservation_id " +
        "INNER JOIN room_types AS rt ON rr.room_type_id=rt.room_type_id " +
        "LEFT JOIN rooms AS rm ON rr.room_id=rm.room_id " +
        "WHERE rr.active=1 && rr.checked_in && " +
        formattedConditions +
        ' ORDER BY rm.room_num ASC;'
    connection.query(query, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  countPendingDeparturesByRoomType: (date, callback) => {
    const query =
        'SELECT rt.room_type_id, rt.type, COUNT(rr.room_type_id) AS pending_departures FROM res_rooms AS rr ' +
        'INNER JOIN room_types AS rt ON rr.room_type_id=rt.room_type_id ' +
        'WHERE rr.active=1 && rr.checked_out=0 && rr.check_out_date=? ' +
        'GROUP BY rr.room_type_id ' +
        'ORDER BY rt.room_type_id ASC;'
    connection.execute(query, [date], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  selectForInvoice: (id, callback) => {
    const query =
        'SELECT rr.res_room_id, (DATE(rr.check_out_date)-DATE(rr.check_in_date)) AS num_days, ' +
        'rr.rate, tr.county_rate, tr.city_rate, tr.state_rate ' +
        'FROM res_rooms AS rr, ' +
        '(SELECT (county_tax_rate/100) AS county_rate, (city_tax_rate/100) AS city_rate, (state_tax_rate/100) AS state_rate ' +
        'FROM tax_rates WHERE tax_rate_id=1 LIMIT 1) AS tr ' +
        'WHERE rr.active=1 && rr.res_room_id=? ' +
        'LIMIT 1;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  selectForPreInvoice: (id, callback) => {
    const query =
        'SELECT rr.res_room_id, c.first_name, c.last_name, SUBSTRING(c.credit_card_num, -4) AS ccLastFour, ' +
        'rr.check_in_date, rr.check_out_date, ' +
        '(DATE(rr.check_out_date)-DATE(rr.check_in_date)) AS num_days, ' +
        'rr.rate, tr.county_rate, tr.city_rate, tr.state_rate FROM res_rooms AS rr ' +
        'INNER JOIN reservations AS r ON r.reservation_id=rr.reservation_id ' +
        'INNER JOIN customers AS c ON c.customer_id=r.customer_id, ' +
        '(SELECT (county_tax_rate/100) AS county_rate, (city_tax_rate/100) AS city_rate, ' +
        '(state_tax_rate/100) AS state_rate FROM tax_rates WHERE tax_rate_id=1 LIMIT 1) AS tr ' +
        'WHERE rr.active=1 && rr.res_room_id=? ' +
        'LIMIT 1;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  selectSome: (id, callback) => {
    const query =
        "SELECT rr.res_room_id, rr.room_type_id, DATE_FORMAT(rr.check_in_date, '%b %d, %Y') AS check_in_date, " +
        "DATE_FORMAT(rr.check_out_date, '%b %d, %Y') AS check_out_date, rr.checked_in, rr.checked_out, rr.adults, " +
        "IFNULL(rm.room_num, 'Not Set') AS room_num, rr.comments, rt.type, rt.rate " +
        "FROM res_rooms AS rr INNER JOIN room_types AS rt ON rr.room_type_id=rt.room_type_id " +
        "LEFT JOIN rooms AS rm ON rm.room_id=rr.room_id " +
        "WHERE rr.reservation_id=?;"
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  getGuests: (conditions, callback) => {
    formattedConditions = conditions.join(' && ')
    const query =
        "SELECT r.reservation_id, DATE_FORMAT(rr.check_in_date, '%b %d, %Y') AS check_in_date, " +
        "DATE_FORMAT(rr.check_out_date, '%b %d, %Y') AS check_out_date, rm.room_num, " +
        "rr.comments, rt.type, c.first_name, c.last_name FROM res_rooms AS rr " +
        "INNER JOIN room_types AS rt ON rr.room_type_id=rt.room_type_id " +
        "INNER JOIN rooms AS rm ON rm.room_id=rr.room_id " +
        "INNER JOIN reservations AS r ON rr.reservation_id=r.reservation_id " +
        "INNER JOIN customers AS c ON c.customer_id=r.customer_id " +
        "WHERE rr.active=1 && rr.checked_in=1 && rr.checked_out=0 && " +
        formattedConditions +
        ' ORDER BY rm.room_num ASC;'
    connection.query(query, (err, result) => {
      if (err) throw err
      callback(result)
    })
    // rm.occupied=1 && " + formattedConditions + "
  },
  deleteSome: (id, callback) => {
    const query = 'DELETE FROM res_rooms WHERE reservation_id=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  insertSome: (id, data, callback) => {
    const resIdLastThree = id.toString().slice(-3)
    let rrNum
    let endOfCode
    const query =
        "INSERT INTO res_rooms (reservation_id, room_type_id, check_in_date, check_out_date, adults, rate, comments) VALUES (?,?,?,?,?,?,(CONCAT(DATE_FORMAT(CURDATE(), '%y%m%d'))),?);"
    data.forEach(function (room, i) {
      rrNum = ('00' + (i + 1)).slice(-3)
      endOfCode = resIdLastThree + rrNum
      room.unshift(id)
      room.splice(6, 0, endOfCode)
      connection.execute(query, room, (err, result) => {
        if (err) throw err
        callback(result)
      })
    })
  },
  cancelSome: (id, callback) => {
    const query = 'UPDATE res_rooms SET active=0 WHERE reservation_id=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateCheckIn: (data, callback) => {
    const query =
        'UPDATE res_rooms SET checked_in=1, room_id=? WHERE res_room_id=?;'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateCheckOut: (id, callback) => {
    const query =
        'UPDATE res_rooms SET checked_out=1 WHERE res_room_id=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateSome: (data, callback) => {
    const query =
        'UPDATE res_rooms SET room_type_id=?, check_in_date=?, check_out_date=?, adults=?, rate=?, comments=? WHERE res_room_id=?;'
    data.forEach(function (room) {
      connection.execute(query, room, (err, result) => {
        if (err) throw err
        callback(result)
      })
    })
  }
}

module.exports = ReservationRoom
