const router = require('express').Router()
const reservationController = require('../../controllers/reservationController')
router
    .route('/')
    .post(reservationController.createNewCustomerWithReservationAndRooms)
    .get(reservationController.getAllReservations)

router.get('/:id', reservationController.getReservationById)

router.put('/cancel/:id', reservationController.cancelReservationById)

router.get(
    '/rooms/:id',
    reservationController.getRoomsConnectedToReservationById
)

module.exports = router
