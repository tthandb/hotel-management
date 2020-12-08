const router = require('express').Router()
const hotelInformationController = require('../controllers/hotelInformationController')
// /hotelInformation
router.get('/:id', hotelInformationController.getInformation)

module.exports = router
