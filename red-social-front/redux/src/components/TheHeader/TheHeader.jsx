import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/auth/authSlice'

const TheHeader = () => {
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)

	const handleLogout = () => {
		dispatch(logout())
		console.log('cosas ...')
	}
	return (
		<nav>
			{user ? (
				<>
					<Link to="/profile">Profile | </Link>
					<button onClick={handleLogout}>Logout</button>
				</>
			) : (
				<>
					<Link to="/">login | </Link>
					<Link to="/register">register</Link>
				</>
			)}
		</nav>
	)
}

export default TheHeader


// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../../redux/auth/authSlice'

// const TheHeader = () => {
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const { user } = useSelector((state) => state.auth)
//     const [text, setText] = useState('')
//     const handleChange = (e) => {
//         setText(e.target.value)
//         if(e.key === 'Enter') {
//             navigate(`/search/${text}`)
//             console.log(text)
//         }
//     }

//     const onLogout = (e) => {
//         e.preventDefault()
//         dispatch(logout())
//         navigate('/login')
//     }
    
//     return(
//         <nav>
//         <input onKeyUp={ handleChange } placeholder='search post' name='text' />
//             <Link to='/'>Home</Link>  
//                 {user ? (
//                     <>
//                     <button onClick={onLogout}>Logout</button>
//                     <Link to='/profile'>Profile | {user.username}</Link>
//                     </>
//                     ) : (
//                         <>
//                         <Link to='/login'>Login</Link>
//                         <Link to ='/register'>Register</Link>
//                         </>
//                     )
//                 }

//         </nav>
//     )
// }

// export default TheHeader