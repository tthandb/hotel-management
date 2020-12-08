const router = require('express').Router()
const roomController = require('../controllers/roomController')
// /room

router
    .route('/')
    .post(roomController.createNewRoom)
    .get(roomController.getAllRooms)

router
    .route('/:id')
    .get(roomController.getRoomById)
    .put(roomController.updateRoomById)
    .delete(roomController.deleteRoomById)

router.get('/id', roomController.getAllRoomIds)
router.get(
    '/housekeeping_status/:clean/:dirty/:vacant/:occupied/:arrived/:stayOver/:dueOut/:departed/:notReserved',
    roomController.getHouseKeepingStatus
)
router.get('/arrivals/:date', roomController.getRoomsArrivals)
router.put('/updateCleanStatus/:status/:room_id', roomController.updateRoomCleanStatus)
router.get('/house_status_rooms',roomController.getHouseStatusRooms)

module.exports = router
