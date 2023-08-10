const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {sendMessage, allMessages} = require('../controllers/messageControllers')


const router = express();

router.route('/').post(protect, sendMessage)
router.route('/:chatId').get(protect, allMessages)

module.exports = router
