const router = require('express').Router()
const roomIssueController = require('../controllers/roomIssueController')

router.put('/roomIssue/:id', roomIssueController.updateRoomIssue)
router.get('/roomIssues', roomIssueController.getAllRoomIssues)
router.put('/roomIssuesFixed/:id', roomIssueController.updateRoomIssueFixed)
router.post('/room_issues', roomIssueController.createRoomIssue)
module.exports = router