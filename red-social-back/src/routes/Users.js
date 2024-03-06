const express = require('expres')
const router = express.Router()
const userControllers = require('../controllers/userControllers')

const authentication = require('../middlewares/authentication')

router.post('/register', userControllers.register)
router.post('/login', userControllers.login)
router.delete('/logout', authentication, userControllers.logout)
router.get('/info', authentication, userControllers.getInfo)

module.exports = router