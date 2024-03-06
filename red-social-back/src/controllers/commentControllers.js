const Comment = require ('../models/comments.js')
const User = require('../models/Users.js')
const Post = require('../models/Posts.js')

const CommentController = {
    async create (req, res) {
        try {
            const Comment = await Comment.create({
                ...req.body,
                UserId: req.user_id
            })
            await User.findByIdAndUpdate(req.user._id, {
                $push: { CommentsIds: Comment._id}
            })
            // await User.findByIdAndUpdate(req.user._id, {
            //     $push: { OrderIds: order._id}
            // })
            res.status(201).send(Comment)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el comentario' })
        } 
    },
    async update(req, res) {
        try {
             const Comment = await Comment.findByIdAndUpdate(
                req.params._id,
                { ...req.body, UserId: req.user._id },
                { new: true },
             )
             res.send({ message: 'Comentario actualizado con éxito', Comment })
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = CommentController