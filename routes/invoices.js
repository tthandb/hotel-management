const router = require('express').Router()
const invoiceController = require('../controllers/invoiceController')
// /invoice
router.post('/', invoiceController.createInvoice)
router.get('/:id', invoiceController.getInvoiceById)
router.get('/invoice_id/:id', invoiceController.getInvoiceIdById)

module.exports = router
