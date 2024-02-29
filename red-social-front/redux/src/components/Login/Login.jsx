import React from "react";
import { useState } from "react";
import { login } from '../../redux/auth/authSlice'
import { useDispatch } from "react-redux";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const onChange = (e) => {          //Comprobar también si es necsario (e) 
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
        console.log('formData', formData)
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="email"
                name="email"
                value={ email }
                onChange={onChange}
                placeholder="tu email aquí"
            />
             <input 
                type="password"
                name="password"
                value={ password }
                onChange={onChange}
                placeholder="tu contraseña aquí"
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login