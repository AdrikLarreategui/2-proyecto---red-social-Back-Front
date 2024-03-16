import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../redux/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
     const navigate = useNavigate()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	})
    const { name, email, password } = formData
        const { isSuccess, message, isError } = useSelector((state) => state.auth)
        const dispatch = useDispatch()
        useEffect(() => {
            if (isSuccess) {
              notification.success({
                message: "Success",
                description: message,
              })
            navigate('/login')
            }
        if (isError) {
                  notification.error({ 
                    message: "Error", 
                    description: message 
                });
                }
                dispatch(reset())
              }, [isSuccess, isError, message]);


	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log('form', formData)
		dispatch(register(formData))
	}

	
	return (
		<>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleChange}
					placeholder="nombre"
				/>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					placeholder="email"
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					placeholder="password"
				/>
				<button type="submit">Enviar...</button>
			</form>
		</>
	)
}

export default Register

