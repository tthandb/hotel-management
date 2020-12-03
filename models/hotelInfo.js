const connection = require('../config/connection')

const HotelInfo = {
  selectOne: (id, callback) => {
    const query =
      'SELECT hotel_info_id, hotel_name, address, city, country, email, phone FROM hotel_info WHERE active=1 && hotel_info_id=? LIMIT 1;'
    connection.execute(query, [id], (err, results, fields) => {
      if (err) throw err
      callback(results)
    })
  }
}

module.exports = HotelInfo
