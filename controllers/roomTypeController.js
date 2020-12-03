const roomType = require('../models/roomType')

module.exports = {
  getAllRoomTypes: (req, res) => {
    roomType.selectAll(data => {
      res.json(data)
    })
  },
  createNewRoomType: (req, res) => {
    roomType.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  getRoomTypeById: (req, res) => {
    roomType.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateRoomTypeById: (req, res) => {
    roomType.updateOne(req.body.vals, req.params.id, result => {
      if (result.changedRows === 0) {
        res.status(204).end()
      } else {
        res.status(200).end()
      }
    })
  },
  deleteRoomTypeById: (req, res) => {
    roomType.deleteOne(req.params.id, data => {
      res.json(data)
    })
  },
  getAvailableRoomsByDate: (req, res) => {
    roomType.selectAvailable(req.params.date, data => {
      res.json(data)
    })
  }
}
