const express = require ('express')
const router = express.Router()

const commentControllers = require('../controllers/commentControllers')
const { authentication, isAuthor } = require('../middlewares/authentication')

router.put('/id/:_id', authentication, isAuthor)
module.exports = router