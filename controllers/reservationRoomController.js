const reservationRoom = require('../models/reservationRoom')
const room = require("../models/room");
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
  },
  updateCheckinRoomByIdAndRoomId: (req, res) => {
    const vals = [req.params.room_id, req.params.id]
    const cond = [1, req.params.room_id]
    reservationRoom.updateCheckIn(vals, () => {
      room.updateOccupied(cond, result => {
        res.json(result)
      })
    })
  },
  updateCheckoutRoomByIdAndRoomNum: (req, res) => {
    reservationRoom.updateCheckOut(req.params.id, () => {
      room.updateCheckOut(req.params.room_num, result => {
        res.json(result)
      })
    })
  },
  getPreInvoice: (req, res) => {
    reservationRoom.selectForPreInvoice(req.params.id, result => {
      const pre_invoice = [
        {
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          check_in_date: result[0].check_in_date,
          check_out_date: result[0].check_out_date,
          res_room_id: result[0].res_room_id,
          num_days: result[0].num_days,
          rate: result[0].rate,
          payment_type: ''
        }
      ]
      res.json(pre_invoice)
    })
  },
  getHouseStatusReservationRooms: (req, res) => {
    reservationRoom.selectForHouseStatus(req.params.date, data => {
      res.json(data)
    })
  },
  getReservationRoomArrivals: (req, res) => {
    const conditions = []
    if (req.params.sdate !== 'undefined') {
      conditions.push("(rr.check_in_date='" + req.params.sdate + "')")
    }
    if (req.params.fname !== 'undefined') {
      conditions.push("c.first_name LIKE '" + req.params.fname + "%'")
    }
    if (req.params.lname !== 'undefined') {
      conditions.push("c.last_name LIKE '" + req.params.lname + "%'")
    }
    conditions.length === 0
        ? conditions.push('(rr.check_in_date=CURDATE())')
        : conditions
    reservationRoom.selectArrivals(conditions, data => {
      res.json(data)
    })
  },
  getReservationRoomDepartures: (req, res) => {
    const conditions = []
    req.params.fname !== 'undefined' &&
    conditions.push("c.first_name LIKE '" + req.params.fname + "%'")
    req.params.lname !== 'undefined' &&
    conditions.push("c.last_name LIKE '" + req.params.lname + "%'")
    req.params.rnum !== 'undefined' &&
    conditions.push("(rm.room_num='" + req.params.rnum + "')")
    req.params.sover === 'true' &&
    conditions.push(
        '(rr.check_in_date<CURDATE() && rr.check_out_date>CURDATE())'
    )
    req.params.dout === 'true' &&
    conditions.push('(rr.check_out_date=CURDATE() && rr.checked_out=0)')
    req.params.dpart === 'true' &&
    conditions.push('(rr.check_out_date=CURDATE() && rr.checked_out=1)')
    conditions.length === 0 &&
    conditions.push('(rr.check_out_date=CURDATE() && rr.checked_out=0)')
    reservationRoom.selectDepartures(conditions, result => {
      res.json(result)
    })
  },
  getPendingDepartures: (req, res) => {
    reservationRoom.countPendingDeparturesByRoomType(req.params.date, result => {
      res.json(result)
    })
  },
  getGuests: (req, res) => {
    const conditions = []
    if (req.params.fname !== 'undefined') {
      conditions.push("c.first_name LIKE '" + req.params.fname + "%'")
    }
    if (req.params.lname !== 'undefined') {
      conditions.push("c.last_name LIKE '" + req.params.lname + "%'")
    }
    if (req.params.rnum !== 'undefined') {
      conditions.push("rm.room_num LIKE '%" + req.params.rnum + "%'")
    }
    conditions.length === 0 ? conditions.push('(rm.occupied=1)') : conditions
    reservationRoom.getGuests(conditions, result => {
      res.json(result)
    })
  }
}
