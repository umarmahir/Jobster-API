const express = require('express')
const router = express.Router()
const rateLimiter = require('express-rate-limit')

const { register, login, updateUser } = require('../controllers/auth')
const authenticateUser = require('../middleware/authentication')
const testUser = require('../middleware/testUser')

const apiLimiter = rateLimiter({
  windowMS: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: 'You have exceeded Login/Register attempts. Try again in 15 minutes',
  },
})

router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

module.exports = router
