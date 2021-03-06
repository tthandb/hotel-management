const connection = require('../config/connection')

const RoomType = {
  selectAll: callback => {
    const query =
        'SELECT room_type_id, type, rate FROM room_types ORDER BY room_type_id ASC;'
    connection.query(query, (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  selectOne: (id, callback) => {
    const query =
        'SELECT room_type_id, type, rate FROM room_types WHERE room_type_id=? ORDER BY room_type_id ASC LIMIT 1;'
    connection.execute(query, [id], (err, results, fields) => {
      if (err) throw err
      callback(results)
    })
  },
  selectAvailable: (date, callback) => {
    const preQueryString = 'SET @input_date=?;'
    const days_to_show = 14
    let query = ''
    for (let i = 0; i < days_to_show; i++) {
      i > 0 && (query += ' UNION ALL ')
      query +=
          'SELECT rm3.date, COALESCE(SUM(rm3.ra1), 0) AS AvailableType1, ' +
          'COALESCE(SUM(rm3.ra2), 0) AS AvailableType2, ' +
          'COALESCE(SUM(rm3.ra3), 0) AS AvailableType3, ' +
          '(COALESCE(SUM(rm3.ra1), 0) + COALESCE(SUM(rm3.ra2), 0) + COALESCE(SUM(rm3.ra3), 0)) AS TotalAvailable, ' +
          'COALESCE(SUM(rm3.ro1), 0) AS OccupiedType1, ' +
          'COALESCE(SUM(rm3.ro2), 0) AS OccupiedType2, ' +
          'COALESCE(SUM(rm3.ro3), 0) AS OccupiedType3, ' +
          '(COALESCE(SUM(rm3.ro1), 0) + COALESCE(SUM(rm3.ro2), 0) + COALESCE(SUM(rm3.ro3), 0)) AS TotalOccupied ' +
          'FROM (SELECT (DATE_ADD(@input_date, INTERVAL ' + i + ' DAY)) AS date, ' +
          'CASE WHEN rm2.room_type_id=1 THEN rm2.available_types END AS ra1, ' +
          'CASE WHEN rm2.room_type_id=2 THEN rm2.available_types END AS ra2, ' +
          'CASE WHEN rm2.room_type_id=3 THEN rm2.available_types END AS ra3, ' +
          'CASE WHEN rm2.room_type_id=1 THEN rm2.used_types END AS ro1, ' +
          'CASE WHEN rm2.room_type_id=2 THEN rm2.used_types END AS ro2, ' +
          'CASE WHEN rm2.room_type_id=3 THEN rm2.used_types END AS ro3 ' +
          'FROM (SELECT rm1.room_type_id, COALESCE(rm1.total_types, 0)-COALESCE(rr1.used_types, 0) AS available_types, ' +
          'COALESCE(rr1.used_types, 0) AS used_types FROM room_types AS rt ' +
          'LEFT JOIN ' +
          '(SELECT rr.room_type_id, COUNT(*) AS used_types FROM res_rooms AS rr ' +
          'WHERE rr.active=1 && rr.check_in_date<=DATE_ADD(@input_date, INTERVAL ' + i + ' DAY) ' +
          '&& rr.check_out_date>DATE_ADD(@input_date, INTERVAL ' + i + ' DAY) ' +
          'GROUP BY rr.room_type_id) AS rr1 ON rt.room_type_id=rr1.room_type_id ' +
          'LEFT JOIN ' +
          '(SELECT rm.room_type_id, COUNT(*) AS total_types FROM rooms AS rm ' +
          'WHERE rm.active=1 GROUP BY rm.room_type_id) AS rm1 ON rt.room_type_id=rm1.room_type_id ' +
          'GROUP BY rt.room_type_id ' +
          'ORDER BY rt.room_type_id ASC) AS rm2) AS rm3 ' +
          'GROUP BY rm3.date'
      i === days_to_show - 1 ? (query += ';') : ''
    }
    connection.query(preQueryString + query, [date], (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  deleteOne: (id, callback) => {
    const query = 'DELETE FROM room_types WHERE room_type_id=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  insertOne: (data, callback) => {
    const query = 'INSERT INTO room_types (type, rate) VALUES (?,?);'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateOne: (data, id, callback) => {
    data.push(id)
    const query =
        'UPDATE room_types SET type=?, rate=? WHERE room_type_id=?;'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  }
}

module.exports = RoomType
