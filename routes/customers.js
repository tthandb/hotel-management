const router = require('express').Router()
const customerController = require('../controllers/customerController')
// /customer
router
    .route("/")
    .post(customerController.createNewCustomer)
    .get(customerController.getAllCustomers);

router
    .route("/:id")
    .get(customerController.getCustomerById)
    .put(customerController.updateCustomerById)
    .delete(customerController.deleteCustomerById);


module.exports = router