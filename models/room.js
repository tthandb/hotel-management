const connection = require('../config/connection')

const Room = {
  selectAll: callback => {
    const query =
        'SELECT ' +
        'rm.room_id, rm.room_num, rm.description, rm.num_beds, rm.clean, rm.occupied, rm.active, rt.room_type_id, rt.type, rt.rate FROM rooms AS rm ' +
        'INNER JOIN room_types AS rt ON rm.room_type_id=rt.room_type_id ' +
        'ORDER BY rm.room_num ASC;'
    connection.query(query, (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  selectForHouseStatus: callback => {
    const query =
        'SELECT COUNT(*) AS roomsToSell, ' +
        'SUM(CASE WHEN rm.clean=1 && rm.occupied=1 THEN 1 ELSE 0 END) AS cleanOccupied, ' +
        'SUM(CASE WHEN rm.clean=1 && rm.occupied=0 THEN 1 ELSE 0 END) AS cleanVacant, ' +
        'SUM(CASE WHEN rm.clean=0 && rm.occupied=1 THEN 1 ELSE 0 END) AS dirtyOccupied, ' +
        'SUM(CASE WHEN rm.clean=0 && rm.occupied=0 THEN 1 ELSE 0 END) AS dirtyVacant FROM rooms AS rm ' +
        'WHERE rm.active=1;'
    connection.query(query, (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  selectAllIdNum: callback => {
    const query =
        'SELECT rm.room_id, rm.room_num FROM rooms AS rm ORDER BY rm.room_id ASC;'
    connection.query(query, (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  selectAllShort: (date, callback) => {
    const preQueryString = 'SET @input_date=?;'
    const query =
        "SELECT rm.room_id, rm.room_num, rm.room_type_id, rm.clean, rm.occupied, IFNULL(ae.avail, 'n/a') AS availability_end FROM rooms AS rm " +
        "LEFT JOIN (SELECT room_id, MIN(check_in_date) AS avail FROM res_rooms " +
        "WHERE check_in_date>@input_date && room_id IS NOT NULL " +
        "GROUP BY room_id) AS ae ON rm.room_id=ae.room_id " +
        "WHERE rm.active=1 && rm.room_id NOT IN " +
        "(SELECT room_id FROM res_rooms WHERE room_id IS NOT NULL && check_in_date<=@input_date && check_out_date>@input_date);"
    connection.query(preQueryString + query, [date], (err, results) => {
      if (err) throw err
      callback(results[1])
    })
  },
  selectOne: (id, callback) => {
    const query =
        'SELECT rm.room_id, rm.room_num, rm.description, rm.num_beds, rm.clean, rm.occupied, rm.active, rt.room_type_id, rt.type, rt.rate ' +
        'FROM rooms AS rm ' +
        'INNER JOIN room_types AS rt ON rm.room_type_id=rt.room_type_id ' +
        'WHERE rm.room_id=? ORDER BY rm.room_num ASC LIMIT 1;'
    connection.execute(query, [id], (err, results, fields) => {
      if (err) throw err
      callback(results)
    })
  },
  housekeepingStatus: (conditions, callback) => {
    let formattedConditions = conditions.join(' && ')
    const query =
        "SELECT rm.room_num, rm.clean, rm.occupied, rm.active, rt.type, rr.checked_in, rr.checked_out, rr.room_id, " +
        "CASE WHEN rr.check_out_date=CURDATE() THEN ('Due Out') END AS departure, " +
        "CASE WHEN rr.check_in_date<CURDATE() && rr.check_out_date>CURDATE() THEN ('Stay Over') END AS stayover " +
        "FROM rooms AS rm " +
        "INNER JOIN room_types AS rt ON rm.room_type_id=rt.room_type_id " +
        "LEFT JOIN res_rooms AS rr ON rm.room_id=rr.room_id && rr.active=1 " +
        "WHERE rm.active=1 && " + formattedConditions +
        " GROUP BY rm.room_id ORDER BY rm.room_id ASC;"
    connection.query(query, (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  selectSome: (condition, callback) => {
    const query =
        'SELECT rm.room_id, rm.room_num, rm.description, rm.num_beds, rm.clean, rm.occupied, rm.active, rt.room_type_id, rt.type, rt.rate FROM rooms AS rm ' +
        'INNER JOIN room_types AS rt ON rm.room_type_id=rt.room_type_id WHERE ' + condition +
        ' ORDER BY rm.room_num ASC;'
    connection.query(query, (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  deleteOne: (id, callback) => {
    const query = 'DELETE FROM rooms WHERE room_id=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  insertOne: (data, callback) => {
    const query =
        'INSERT INTO rooms (room_num, room_type_id, description, num_beds, clean, occupied, active) VALUES (?,?,?,?,?,?,?);'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateOne: (data, id, callback) => {
    data.push(id)
    const query =
        'UPDATE rooms SET room_num=?, room_type_id=?, description=?, num_beds=?, clean=?, occupied=?, active=? WHERE room_id=?;'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateOccupied: (data, callback) => {
    const query = 'UPDATE rooms SET occupied=? WHERE room_id=?;'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateCheckOut: (id, callback) => {
    const query = 'UPDATE rooms SET occupied=0, clean=0 WHERE room_num=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateClean: (data, callback) => {
    const query = 'UPDATE rooms SET clean=? WHERE room_id=?;'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  }
}

module.exports = Room
