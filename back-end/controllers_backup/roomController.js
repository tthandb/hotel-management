const room = require('../models/room')

module.exports = {
  getAllRooms: (req, res) => {
    room.selectAll(data => {
      res.json(data)
    })
  },
  createNewRoom: (req, res) => {
    room.insertOne(req.body.vals, result => {
      res.json({ id: result.insertId })
    })
  },
  getRoomById: (req, res) => {
    room.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
  updateRoomById: (req, res) => {
    room.updateOne(req.body.vals, req.params.id, result => {
      if (result.changedRows === 0) {
        res.status(204).end()
      } else {
        res.status(200).end()
      }
    })
  },
  deleteRoomById: (req, res) => {
    room.deleteOne(req.params.id, data => {
      res.json(data)
    })
  }
}
