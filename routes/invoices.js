const router = require('express').Router()
const invoiceController = require('../controllers/invoiceController')

router.post('/invoice', invoiceController.createInvoice)
router.get('/invoice/:id', invoiceController.getInvoiceById)
router.get('/invoice_id/:id', invoiceController.getInvoiceIdById)

module.exports = router
