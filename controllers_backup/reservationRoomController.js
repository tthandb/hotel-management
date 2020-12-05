const reservationRoom = require('../models/reservationRoom')
module.exports = {
  createNewReservationRoom: (req, res) => {
    reservationRoom.insertSome(req.body.vals, result => {
      res.json({result})
    })
  },
  getReservationRoomById: (req, res) => {
    reservationRoom.selectSome(req.params.id, result => {
      res.json(result)
    })
  }
}
