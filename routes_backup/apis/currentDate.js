const router = require('express').Router()
const currentDateController = require('../../controllers_backup/currentDateController')

router.get('/arrivals', currentDateController.getCurrentDateArrivals)
router.get('/departures', currentDateController.getCurrentDateDepartures)

module.exports = router
