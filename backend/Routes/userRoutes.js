const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, logoutUser } = require('../Cotroller/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/me', protect, getMe)
// router.get('/', getAllUsers)

module.exports = router