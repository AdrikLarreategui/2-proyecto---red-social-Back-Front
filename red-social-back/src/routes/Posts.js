const express = require('express')
const router = express.Router()
const postControllers = require('../controllers/postControllers')
const { authentication } = require('../middlewares/authentication')

router.post('/', authentication, postControllers.create)
router.put('/:_id', authentication, postControllers.update)
router.delete('/:_id', authentication, postControllers.delete)
router.get('/getAll.', postControllers.getAll)
router.get('/getById/:_id', postControllers.getById)
router.get('/name/:name', postControllers.getPostByName)
router.put('/reviews/:_id', authentication, postControllers.insertComment)
router.put('/like/:productId', authentication, postControllers.like)

module.exports = router