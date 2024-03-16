const Posts = require ('../models/Posts.js')
const Users = require('../models/Users.js')

const PostControllers = {
    async create (req, res) {
        try {
            const post = await Posts.create(req,body)
            res.status(201).send(post)
            console.log('Hola', post)
        } catch(error) {
            console.error(error)
            res.status(501).send({ message: "Ha habido un problema al crear el post" })
        }
    },

    async getAll (req, res) {
        try {
            const { page = 1, limit = 10 } = req.query
            const post = await Posts.find()
            .populate('Comments.UserId')
            .limit(limit)
            .skip(( page -1) * limit)
            res.status(200).send(post)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema' })
        }
    },

    async getById (req, res) {
        try {
            const post = await Posts.findById(req.params._id)
            res.status(200).send(post)
        } catch(error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema con la búsqueda' })
        }
    },

    async getPostByName (req, res) {
        try {
            const post = await Posts.find({
                $text: {
                    $search: req.params.name
                },
            })
            res.status(200).send(post)
        } catch(error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema con la búsqueda' })
        }
    },

    async update (req, res) {
        try {
            const post = await Posts.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            )
            res.status(201).send({post,  message: 'Post actualizado con éxito'})
        } catch(error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema con la actualización' })
        }
    },

    async delete(req, res) {
        try {
            const post = await Posts.findByIdAndDelete(
                req.params._id,
                req.body,
                { new: true }
            )
            res.status(201).send({post,  message: 'Post eliminado con éxito'})
        } catch(error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema con la actualización' })
        }
    },

    async insertComment(req, res) {
        try {
            const post = await Posts.findByIdAndUpdate(
                req.params._id,
                {
                    $push: {
                        reviews: { comment: req.body.comment, UserId: req.User._id }
                    },
                },
                { new: true }
            )
            res.send(post)
        } catch(error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al insertar el comentario' })
        }
    },

    async like(req, res) {
        try {
            const post = await Posts.findByIdAndUpdate(
                req.params.PostsId,
                { $push: { likes: req.user._id }},
                {new: true}
            )
            res.send(post)
        } catch(error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema' })
        }
    },

    async getInfo(req, res) {
        try {
            const user = await Users.findById(req.user._id)
            .populate({
                path: 'CommentsId',
                populate: {
                    path: 'PostsId',
                },
            })
            res.send(user)
        } catch(error) {
            console.error(error)
        }
    },
}

module.exports = PostControllers