const router = require('express').Router()
const invoiceController = require('../controllers/invoiceController')
const reservationRoomController = require('../controllers/reservationRoomController')
// /invoice
router.post('/', invoiceController.createInvoice)
router.get('/:id', invoiceController.getInvoiceById)
router.get('/invoice_id/:id', invoiceController.getInvoiceIdById)
router.get('/preInvoice/:id', reservationRoomController.getPreInvoice)
module.exports = router
