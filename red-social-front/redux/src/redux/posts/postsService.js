import axios from 'axios'

const API_URL = "http://localhost:3000"

const getAll = async() => {
    const res = await axios.get(API_URL +
        "/posts/getAllPosts")
        return res.data.posts
}

const postsService = {
    getAll
}

export default postsService