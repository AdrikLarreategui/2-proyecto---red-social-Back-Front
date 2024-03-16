const Comments = require ('../models/comments.js')
const Users = require('../models/Users.js')
const Posts = require('../models/Posts.js')

const CommentControllers = {
    async create (req, res) {
        try {
            const comment = await Comments.create({
                ...req.body,
                UserId: req.user_id
            })
            await Users.findByIdAndUpdate(req.user._id, {
                $push: { CommentsIds: comment._id}
            })
            res.status(201).send(comment)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el comentario' })
        } 
    },
    async update(req, res) {
        try {
             const comment = await Comments.findByIdAndUpdate(
                req.params._id,
                { ...req.body, UserId: req.user._id },
                { new: true },
             )
             res.send({ message: 'Comentario actualizado con éxito', comment })
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = CommentControllers