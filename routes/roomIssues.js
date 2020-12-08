const router = require('express').Router()
const roomIssueController = require('../controllers/roomIssueController')

// /roomIssue
router.route('/')
    .get(roomIssueController.getAllRoomIssues)
    .post(roomIssueController.createRoomIssue)
    .put(roomIssueController.updateRoomIssue)
router.put('/fixed/:id', roomIssueController.updateRoomIssueFixed)

module.exports = router