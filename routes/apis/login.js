const router = require('express').Router()
const passport = require('passport')

router.route('/').post(passport.authenticate('local'), (req, res) => {
  res.status(200).json({user: req.user})
})

router.route('/status').get((req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({user: req.user})
  } else {
    res.status(200).json({
      user: {
        access_id: 0,
        type: 'Guest',
        user_id: 0,
        username: 'guest'
      }
    })
  }
})

module.exports = router
