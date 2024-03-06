const Posts = require('../models/Posts.js')
const Users = require('../models/Users.js')
const jwt = require ('jsonwebtoken')
require('dotenv').config()

const userControllers = {
        async register(req, res, next) {
            try {
                const User = await User.create({
                    ...req.body,
                    role: 'user'
            })
            res.status(201).send({ message: 'Usuario registrado con exito', User })
            } catch(error) {
                error.origin = 'User'
                next(error)
            }
        },

        async login(req, res) {
            try {
                const User = await User.findOne({
                    email: req.body.email
                })
                const Token = jwt.sign({ _id: User._id }, process.env.JWT_SECRET)
                if(User.tokens.length > 4) User.tokens.shift()
                User.tokens.push(Token)
                await User.save()
                res.send({ message: 'Bienvenid@ ' + User.name, Token })
            } catch(error) {
                console.error(error)
            }
        },
        
        async logout(req, res) {  
            console.log(req)
            console.log('patata', req.headers.authorization) 
            try {
                const User = await User.findByAndUpdate(req.user._id, {
                    $pull: { tokens: req.headers.authorization }
                })
                res.status(200).send({ message: 'Usuario desconectado con éxito'})
            } catch(error) {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar desconectar al usuario',
                })
            }
        },

        async getInfo(req, res) {
            try {
                const User = await User.findById(req.user._id)
                res.send(User)
            } catch(error) {
                console.error(error)
        }
        }
}

module.exports = userControllers