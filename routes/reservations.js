const router = require('express').Router()
const reservationController = require('../controllers/reservationController')

router
    .route('/')
    .post(reservationController.createNewCustomerWithReservationAndRooms)
    .get(reservationController.getAllReservations)
    .put(reservationController.updateReservation)
router.get('/:id', reservationController.getReservationById)
router.put('/cancel/:id', reservationController.cancelReservationById)
router.get(
    '/rooms/:id',
    reservationController.getRoomsConnectedToReservationById
)
router.get('/reservations_list/:fname/:lname/:sdate/:edate',reservationController.getReservationByNameAndDate)

module.exports = router
