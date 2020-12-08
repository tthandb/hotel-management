const router = require('express').Router()
const reservationController = require('../controllers/reservationController')
// /reservation
router
    .route('/')
    .get(reservationController.getAllReservations)
    .post(reservationController.createNewCustomerWithReservationAndRooms)
    .put(reservationController.updateReservation)
router.get('/:id', reservationController.getReservationById)
router.put('/cancel/:id', reservationController.cancelReservationById)
router.get('/reservationList/:fname/:lname/:sdate/:edate', reservationController.getReservationByNameAndDate)
module.exports = router
