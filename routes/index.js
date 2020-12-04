const router = require('express').Router()
const apiRoutes = require('./apis')
const path = require('path')

router.use('/apis', apiRoutes)

module.exports = router
