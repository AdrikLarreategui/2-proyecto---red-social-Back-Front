import React, { useEffect } from 'react'
import Post from './Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../redux/posts/postsSlice'


const Posts = () => {
    // const { isLoading } =  useSelector((state) => (state.posts))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
        // console.log('hola', isLoading)
        dispatch(reset())
    }, [])

    return (
		<div>
			<h1>Posts</h1>
			{/* {isLoading ? 'cargando...' : <Post />} */}
		</div>
	)
}

export default Posts