const router = require('express').Router()
const roomController = require('../../controllers/roomController')

router
  .route('/')
  .post(roomController.createNewRoom)
  .get(roomController.getAllRooms)

router
  .route('/:id')
  .get(roomController.getRoomById)
  .put(roomController.updateRoomById)
  .delete(roomController.deleteRoomById)

module.exports = router
