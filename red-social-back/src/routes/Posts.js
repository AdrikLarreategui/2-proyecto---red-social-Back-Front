const express = require('express')
const router = express.Router()
const postControllers = require('../controllers/postControllers')
const { authentication } = require('../middlewares/authentication')

router.post('/', authentication, PostController.create)
router.put('/:_id', authentication, PostController.update)
router.delete('/:_id', authentication, PostController.delete)
router.get('/getAll.', PostController.getAll)
router.get('/getById/:_id', PostController.getById)
router.get('/name/:name', PostController.getPostByName)
router.put('/reviews/:_id', authentication, PostController.insertComment)
router.put('/like/:productId', authentication, PostController.like)

module.exports = router