const user = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  createNewUser: (req, res) => {
    const userData = req.body.vals
    bcrypt.hash(userData[1], saltRounds, (err, hash) => {
      userData[1] = hash
      user.insertOne(userData, result => {
        res.status(200).json({ id: result.insertId })
      })
    })
  },
  getAllUsers: (req, res) => {
    user.selectAll(data => {
      res.status(200).json(data)
    })
  },
  selectUserById: (req, res) => {
    user.selectOneById(req.params.id, data => {
      res.status(200).json(data)
    })
  },
  updateUserById: (req, res) => {
    const userData = req.body.vals
    bcrypt.hash(userData[1], saltRounds, (err, hash) => {
      userData[1] = hash
      user.updateOne(userData, req.params.id, result => {
        if (result.changedRows === 0) {
          res.status(204).end()
        } else {
          res
            .status(200)
            .send(`Successfully updated the user: ${userData[0]}`)
            .end()
        }
      })
    })
  },
  deleteUserById: (req, res) => {
    user.deleteOne(req.params.id, data => {
      res.status(200).json(data)
    })
  }
}
