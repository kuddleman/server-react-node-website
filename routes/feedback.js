const express = require('express')
const router = express.Router()
const { emailFeedback } = require('../controllers/feedback')

// this route will actually be:  /api/feedback
router.post('/feedback', emailFeedback )

module.exports = router