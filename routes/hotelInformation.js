const router = require('express').Router()
const hotelInformationController = require('../controllers/hotelInformationController')

router.get('/hotelInfo/:id', hotelInformationController.getInformation)

module.exports = router
