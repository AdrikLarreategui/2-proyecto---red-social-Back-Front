import React, { useState } from 'react'
import { UseDispatch } from 'react-redux'
import { register } from '../../redux/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
    const dispatch = UseDispatch()

    const [ formData, setFormData ] = useState({
        name: '',
        username: '',
        password: '', //Los campos a rellenar tienen que coincidir con los existentes en la base de datos del back. Comprobar
        email: ''
    })

    const { name, username, password, email } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value //password utilizado en el back
        }))
    }

    //Seguir aquí. 
}

export default Register