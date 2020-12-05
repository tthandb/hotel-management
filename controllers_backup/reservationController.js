const customer = require('../models/customer')
const reservation = require('../models/reservation')
const reservationRoom = require('../models/reservationRoom')
module.exports = {
  createNewCustomerWithReservationAndRooms: (req, res) => {
    customer.insertOne(req.body.cust, result => {
      reservation.insertOne(result.insertId, req.body.reserve, result => {
        const reservationId = result.insertId
        resRoom.insertSome(result.insertId, req.body.rooms, () => {
          res.status(200).send({ reservation_id: reservationId })
        })
      })
    })
  },
  getAllReservations: (req, res) => {
    reservation.selectAll(data => {
      res.status(200).json(data)
    })
  },
  getReservationById: (req, res) => {
    reservation.selectOne(req.params.id, result => {
      res.json(result)
    })
  },
  getRoomsConnectedToReservationById: (req, res) => {
    reservationRoom.selectSome(req.params.id, result => {
      res.json(result)
    })
  },
  cancelReservationById: (req, res) => {
    reservation.cancelOne(req.params.id, result => {
      console.log(`Changed reservation_id ${result.affectedRows} to canceled.`)
      reservationRoom.deleteSome(req.params.id, data => {
        res.json(data)
      })
    })
  }
}
