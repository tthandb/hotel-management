const router = require('express').Router()
const userController = require('../../controllers/userController')

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createNewUser)

router
  .route('/:id')
  .get(userController.selectUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteUserById)

module.exports = router
