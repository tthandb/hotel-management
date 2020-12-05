const invoice = require('../models/invoice')
const reservationRoom = require('../models/reservationRoom')

module.exports = {
  getInvoiceById: (req, res) => {
    invoice.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  getInvoiceIdById: (req, res) => {
    invoice.selectOneId(req.params.id, data => {
      res.json(data)
    })
  },
  createInvoice: (req, res) => {
    reservationRoom.selectForInvoice(req.body.id, result => {
      const payment_type = req.body.payment_type
      const data = [
        result[0].res_room_id,
        result[0].num_days,
        result[0].rate,
        payment_type
      ]
      invoice.insertOne(data, result => {
        res.json(result.insertId)
      })
    })
  },
}