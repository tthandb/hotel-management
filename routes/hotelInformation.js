const router = require('express').Router()
const hotelInformationController = require('../controllers/hotelInformationController')
// /hotelInfo
router.get('/:id', hotelInformationController.getInformation)

module.exports = router
