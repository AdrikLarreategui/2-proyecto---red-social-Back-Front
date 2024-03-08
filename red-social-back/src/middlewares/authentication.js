const Users = require('../models/Users.js')
const Posts = require('../models/Posts.js')
const Comments = require ('../models/comments.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authentication = async(req, res, next) => {
    try{
        console.log('patata', req)
        const Token = req.headers.authorization
        const payload = jwt.verify(Token, process.env.JWT_SECRET)
        const user = await Users.findOne({ _id:payload._id, tokens: Token})
        if(!user) {
            return res.status(401).send({ message: 'No estás autorizado' })
        }
        req.user = user
        next()
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, message: 'Ha habido un problema con el token'})
    }
}

const isAdmin = async (req, res, next) => {
    const admins = ['admin', 'superadmin']
    if(!admins.includes(req.user.role)) {
        return res.status(403).send({message: 'No tienes permiso'})
    } next()
}

const isAuthor = async (req, res, next) => {
    try {
        const post = await Posts.findById(req.params._id)
        if(post.userId.toString() !== req.user._id.toString()) {
            res.status(403).send({ message: 'No puedes cambiar este comentario' })
        }
        next()
    } catch (error) {
        console.error(error)
        return res.status(500).send ({ error, message: 'Ha habido un problema'})
    }
}

module.exports = { authentication, isAdmin, isAuthor }