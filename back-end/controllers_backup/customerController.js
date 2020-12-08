const customer = require('../models/customer')
module.exports = {
  createNewCustomer: (req, res) => {
    customer.insertOne(req.body.vals, result => {
      res.status(200).json({ id: result.insertId })
    })
  },

  getAllCustomers: (req, res) => {
    customer.selectAll(data => {
      res.status(200).json(data)
    })
  },

  getCustomerById: (req, res) => {
    customer.selectOne(req.params.id, data => {
      res.status(200).json(data)
    })
  },

  updateCustomerById: (req, res) => {
    customer.updateOne(req.body.vals, req.params.id, result => {
      if (result.changedRows === 0) {
        res.status(204).end()
      } else {
        res.status(200).end()
      }
    })
  },

  deleteCustomerById: (req, res) => {
    customer.deleteOne(req.params.id, data => {
      res.status(200).json(data)
    })
  }
}
