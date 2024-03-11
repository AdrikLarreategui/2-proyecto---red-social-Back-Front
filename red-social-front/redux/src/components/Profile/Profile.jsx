import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
	const { user } = useSelector((state) => state.auth)
	return (
		<>
			{user ? (
				<>
					<h1>Profile</h1>
					<p>Hola {user.name}</p>
					<p>Hola {user.email}</p>
				</>
			) : (
				<p>cargando...</p>
			)}
		</>
	)
}

export default Profile


// import { useSelector } from 'react-redux'

// const Profile = () => {
//     const { user } = useSelector((state) => state.auth)

//     return (
//         <>
//         <h1>Profile</h1>
//         <p>{user.name}</p> 
//         <p>{user.email}</p>
//         <img src = {`http://localhost:3000/${user.user_img}`}/> 
//         {/* adaptar a formato de base de datos propia */}
//         </>
//     )
// }

// export default Profile