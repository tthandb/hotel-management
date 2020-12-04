const router = require('express').Router()
const currentDateController = require('../../controllers/currentDateController')

router.get('/arrivals', currentDateController.getCurrentDateArrivals)
router.get('/departures', currentDateController.getCurrentDateDepartures)

module.exports = router
