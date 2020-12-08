const customer = require('../models/customer')
const reservation = require('../models/reservation')
const reservationRoom = require('../models/reservationRoom')
module.exports = {
  createNewCustomerWithReservationAndRooms: (req, res) => {
    customer.insertOne(req.body.cust, result => {
      reservation.insertOne(result.insertId, req.body.reserve, result => {
        const reservationId = result.insertId
        reservationRoom.insertSome(result.insertId, req.body.rooms, () => {
          res.status(200).send({reservation_id: reservationId})
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
  updateReservation: (req, res) => {
    customer.updateOne(req.body.cust, () => {
      reservation.updateOne(req.body.reserve, () => {
        reservationRoom.updateSome(req.body.rooms, result => {
          res.status(200).send(result)
        })
      })
    })
  },
  cancelReservationById: (req, res) => {
    reservation.cancelOne(req.params.id, result => {
      console.log(`Changed reservation_id ${result.affectedRows} to canceled.`)
      reservationRoom.deleteSome(req.params.id, data => {
        res.json(data)
      })
    })
  },
  getReservationByNameAndDate: (req, res) => {
    const conditions = []
    req.params.fname !== 'undefined' &&
    conditions.push("c.first_name LIKE '" + req.params.fname + "%'")
    req.params.lname !== 'undefined' &&
    conditions.push("c.last_name LIKE '" + req.params.lname + "%'")
    req.params.sdate !== 'undefined' &&
    conditions.push("(rr.check_in_date='" + req.params.sdate + "')")
    req.params.edate !== 'undefined' &&
    conditions.push("(rr.check_out_date='" + req.params.edate + "')")
    conditions.length === 0 && conditions.push('(rr.check_in_date>=CURDATE())')
    reservation.selectSome(conditions, data => {
      res.json(data)
    })
  }

}
