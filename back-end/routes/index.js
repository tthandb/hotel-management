const router = require('express').Router()

router.use('/customer', require('./customers'))
router.use('/hotelInformation', require('./hotelInformation'))
router.use('/invoice', require('./invoices'))
router.use('/login', require('./login'))
router.use('/logout', require('./logout'))
router.use('/reservationRoom', require('./reservationRooms'))
router.use('/reservation', require('./reservations'))
router.use('/room', require('./rooms'))
router.use('/roomType', require('./roomTypes'))

module.exports = router