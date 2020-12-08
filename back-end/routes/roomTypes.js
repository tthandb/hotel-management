const router = require('express').Router()
const roomTypeController = require('../controllers/roomTypeController')

// /roomType

router.get('/', roomTypeController.getAllRoomTypes)
router.get('/available/:date', roomTypeController.getAvailableRoomsByDate)

module.exports = router
