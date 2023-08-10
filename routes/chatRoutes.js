const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();
const {accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromFroup} = require('../controllers/chatControllers')

router.post('/', protect, accessChat)
router.get('/', protect, fetchChats)
router.post('/group', protect, createGroupChat)
router.put('/rename', protect, renameGroup)
router.put('/groupremove', protect, removeFromFroup)
router.put('/groupadd', protect, addToGroup)

module.exports = router
