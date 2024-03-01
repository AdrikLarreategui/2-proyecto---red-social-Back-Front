import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from '../../redux/auth/authSlice'
import { notification } from 'antd'

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

    const navigate = useNavigate()
    const { isError, isSuccess, message } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
        console.log('formData', formData)
    }

    useEffect(() => {
        if (isError) {
          notification.error({  
            message: "Error", 
            description: message });
        }
        if (isSuccess) {
          notification.success({  
            message: "Success", 
            description: message });
          setTimeout(() => {
            navigate("/profile");
          }, 2000);
        }
        dispatch(reset());
      }, [isError, isSuccess, message]);
    

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