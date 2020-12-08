const hotelInfo = require("../models/hotelInfo");

module.exports = {
  getInformation: (req, res) => {
    hotelInfo.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
}