import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPostByName } from "../../redux/posts/postsSlice"

const Search = () => {
    const { posts } = useSelector((state) => state.posts)
    const { postName } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostByName(postName))
        // console.log(postName)
    }, [postName])

    return (
   <>
     {posts.map((post) => (
       <div key={post._id} className='post'>
         <h2>{post.title}</h2>
         <p>{post.content}</p>
         <img src={`http://localhost:3000/${post.post_img}`} width='350px' />
       </div>
     ))}
   </>
 )
}

export default Search