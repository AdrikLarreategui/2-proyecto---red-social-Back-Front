import { useSelector } from 'react-redux'

const Profile = () => {
    const { user } = useSelector((state) => state.auth)

    return (
        <>
        <h1>Profile</h1>
        <p>{user.name}</p> 
        <p>{user.email}</p>
        {/* //Comprobar si se corresponde con lo guardado en la base de datos */}
        </>
    )
}

export default Profile