import hotelInfo from "../models/hotelInfo";

module.exports = {
  getInformation: (req, res) => {
    hotelInfo.selectOne(req.params.id, data => {
      res.json(data)
    })
  },
}