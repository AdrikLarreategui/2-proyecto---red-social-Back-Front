import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
    const dispatch = useDispatch()

    const [ formData, setFormData ] = useState({
        name: '',
        username: '',
        password: '', //Los campos a rellenar tienen que coincidir con los existentes en la base de datos del back. Comprobar
        email: ''
    })

    const { name, username, password, email } = formData

    const onChange = (e) => { // comprobar si (e) es correcto o habría que escribir algo distinto
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value //password utilizado en el back
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
       
        // if( password !== password2) {
        //     return notification.error ({
        //         message: 'Error',
        //         description: 'Passwords do not match'
        //     })                                               Esto solo se aplica cuando en el formulario
        // } else {                                             se pide confirnmar contraseña
        //     notification.success({
        //         message: 'Success',
        //         description: 'Everything ok'
        //     })
            // return dispatch(register(formData))
            dispatch(register(formData))
            console.log('formData',formData)
        }
    
        return (
            <form onSubmit={onSubmit}>
                <input 
                    type = "text"
                    name = "name"
                    value = { name }
                    onChange={onChange}
                    placeholder='Tu nombre aquí'
                />
                <input 
                    type = "text"
                    name = "username"
                    value = { username }
                    onChange={onChange}
                    placeholder='Tu nombre de usuario aquí'
                />
                <input 
                    type = "password"
                    name = "password"
                    value = { password }
                    onChange={onChange}
                    placeholder='Tu contraseña aquí'
                />
                 <input 
                    type = "email"
                    name = "email"
                    value = { email }
                    onChange={ onChange }
                    placeholder='Tu email aquí'
                />
                {/* <input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                /> */}

                <button type='submit'>Register</button>
            </form>
        )
    }


export default Register

