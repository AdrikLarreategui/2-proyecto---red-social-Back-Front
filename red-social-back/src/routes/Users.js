const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')

// const authentication = require('../middlewares/authentication')

router.post('/register', userControllers.register)
router.post('/login', userControllers.login)
router.delete('/logout', userControllers.logout)
router.get('/info', userControllers.getInfo)

module.exports = router