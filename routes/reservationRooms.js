const router = require('express').Router()
const reservationRoomController = require('../controllers/reservationRoomController')
// /reservationRoom
router.post('/', reservationRoomController.createNewReservationRoom)
router.get('/:id', reservationRoomController.getReservationRoomById)
router.put('/checkinRoom/:id/:room_id', reservationRoomController.updateCheckinRoomByIdAndRoomId)
router.put('/checkoutRoom/:id/:room_num', reservationRoomController.updateCheckoutRoomByIdAndRoomNum)
router.get('/pre_invoice/:id', reservationRoomController.getPreInvoice)
router.get('/house_status_res_rooms/:date', reservationRoomController.getHouseStatusReservationRooms)
router.get('/arrivals/:sdate/:fname/:lname', reservationRoomController.getReservationRoomArrivals)
router.get('/departures/:fname/:lname/:rnum/:sover/:dout/:dpart', reservationRoomController.getReservationRoomDepartures)
router.get('/pendingDepartures/:date', reservationRoomController.getPendingDepartures)
router.get('/guests/:fname/:lname/:rnum', reservationRoomController.getGuests)
module.exports = router