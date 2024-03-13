const mongoose = require('mongoose')
const ObjectId = mongoose.SchemaTypes.ObjectId
const User = require('../models/Users')
const PostSchema = new mongoose.Schema ({
    body: {
        type: String,
        required: true
    },
}, { timestamps: true })

PostSchema.index({
    name: 'text'
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post