const Posts = require('../models/Posts.js')
const Users = require('../models/Users.js')
const jwt = require ('jsonwebtoken')
require('dotenv').config()

const UserControllers = {
        async register(req, res, next) {
            try {
                const user = await Users.create({
                    ...req.body,
                    role: 'user'
            })
            res.status(201).send({ message: 'Usuario registrado con exito', user })
            } catch(error) {
                error.origin = 'User'
                next(error)
            }
        },

        async login(req, res) {
            try {
                const user = await Users.findOne({
                    email: req.body.email
                })
                const Token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
                if(user.tokens.length > 4) user.tokens.shift()
                user.tokens.push(Token)
                await user.save()
                res.send({ message: 'Bienvenid@ ' + user.name, Token })
            } catch(error) {
                console.error(error)
            }
        },
        
        async logout(req, res) {  
            console.log(req)
            console.log('patata', req.headers.authorization) 
            try {
                const User = await Users.findByIdAndUpdate(req.user._id, { //consultar esta línea
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
                const user = await Users.findById(req.user._id)
                res.send(user)
            } catch(error) {
                console.error(error)
        }
        }
}

module.exports = UserControllers