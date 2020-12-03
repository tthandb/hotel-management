const connection = require('../config/connection')

const RoomIssue = {
  selectAll: callback => {
    const query =
        'SELECT ri.room_issue_id, ri.room_id, ri.issue, ri.start_date, ri.end_date, rt.type, rm.room_num FROM room_issues AS ri ' +
        'INNER JOIN rooms AS rm ON ri.room_id=rm.room_id ' +
        'INNER JOIN room_types AS rt ON rm.room_type_id=rt.room_type_id ' +
        'WHERE ri.fixed=0 ORDER BY rm.room_num ASC;'
    connection.query(query, (err, results) => {
      if (err) throw err
      callback(results)
    })
  },
  insertOne: (data, callback) => {
    const query =
        'INSERT INTO room_issues (room_id, issue, user_id, start_date, end_date) VALUES (?,?,?,?,?);'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateOne: (data, id, callback) => {
    data.push(id)
    const query =
        'UPDATE room_issues SET room_id=?, issue=?, user_id=?, start_date=?, end_date=? WHERE room_issue_id=?;'
    connection.execute(query, data, (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateOneFixed: (id, callback) => {
    const query = 'UPDATE room_issues SET fixed=1 WHERE room_issue_id=?;'
    connection.execute(query, [id], (err, result) => {
      if (err) throw err
      callback(result)
    })
  }
}

module.exports = RoomIssue
