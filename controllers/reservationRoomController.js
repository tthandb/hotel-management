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
  }


}
