import React, { useEffect } from 'react'
import Post from './Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../redux/posts/postsSlice'


const Posts = () => {
    const { isLoading } =  useSelector((state) => (state.posts))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
        dispatch(reset())
    }, [])

    return(
        <>
            <h1>Posts</h1>
            { isLoading ? 'Cargando...' :  <Post />}
            {/* {Posts.map(posts => {
                <>
                <p>{Posts.name}</p>
                <>
            })} */}
        </>
    )
}

export default Posts