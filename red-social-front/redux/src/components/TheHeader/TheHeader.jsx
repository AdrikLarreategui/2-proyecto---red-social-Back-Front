import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/auth/authSlice'

const TheHeader = () => {
 const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)
 const [text, setText] = useState('')

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
