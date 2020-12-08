const router = require('express').Router()
const roomController = require('../controllers/roomController')
// /room
router.get('/id', roomController.getAllRoomIds)
router.get(
    '/housekeepingStatus/:clean/:dirty/:vacant/:occupied/:arrived/:stayOver/:dueOut/:departed/:notReserved',
    roomController.getHouseKeepingStatus
)
router.get('/arrivals/:date', roomController.getRoomsArrivals)
router.put('/updateCleanStatus/:status/:room_id', roomController.updateRoomCleanStatus)
router.get('/houseStatusRooms',roomController.getHouseStatusRooms)

module.exports = router
