const reservationRoom = require('../models/reservationRoom')
module.exports = {
  getCurrentDateArrivals: (req, res) => {
    const condition = 'rr.check_in_date=CURDATE()'
    reservationRoom.selectArrivals(condition, result=>{
      res.json({result})
    })
  },
  getCurrentDateDepartures: (req, res) => {
    const condition = 'rr.check_out_date=CURDATE()'
    reservationRoom.selectDepartures(condition, result => {
      res.json({ result })
    })
  }
}
