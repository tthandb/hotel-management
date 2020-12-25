const roomIssue = require('../models/roomIssue')
module.exports = {
  getAllRoomIssues: (req, res) => {
    roomIssue.selectAll(data => {
      res.json(data)
    })
  },
  updateRoomIssue: (req, res) => {
    roomIssue.updateOne(req.body.vals, req.params.id, result => {
      if (result.changedRows === 0) {
        res.status(204).end()
      } else {
        res.status(200).end()
      }
    })
  },
  updateRoomIssueFixed: (req, res) => {
    roomIssue.updateOneFixed(req.params.id, result => {
      if (result.changedRows === 0) {
        res.status(204).end()
      } else {
        res.status(200).end()
      }
    })
  },
  createRoomIssue: (req, res) => {
    roomIssue.insertOne(req.body.vals, result => {
      res.json({id: result.insertId})
    })
  }
}
