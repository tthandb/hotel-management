const router = require('express').Router()
const roomTypeController = require('../controllers/roomTypeController')

// /roomType

router
    .route('/')
    .get(roomTypeController.getAllRoomTypes)
    .post(roomTypeController.createNewRoomType)

router
    .route('/:id')
    .get(roomTypeController.getRoomTypeById)
    .put(roomTypeController.updateRoomTypeById)
    .delete(roomTypeController.deleteRoomTypeById)

router.get('/available/:date', roomTypeController.getAvailableRoomsByDate)

module.exports = router
