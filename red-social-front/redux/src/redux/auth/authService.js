import axios from 'axios'

const API_URL = 'http://localhost:3000' //Esla dirección del puerto donde se haya creado la base del back. Comprobarlo

const register = async(userData) => {
    const res = await axios.post(`${API_URL}/users/register`, userData)
    return res.data
}

const login = async(userData) => {
    const res = await axios.post(`${API_URL}/users/login`, userData)

    if(res.data) {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('token', JSON.stringify(res.data.token))
    }
    return res.data
}

const logout = async () => {
    const token = JSON.parse(localStorage.setItem('token'))
    const res = await axios.delete(API_URL + 'users/logout', {
        headers:{
            authorization: token,
        }
    })
    if(res.data) {
        localStorage.clear()
    }
    return res.data  
}

const authService = {
    register, 
    login,
    logout
}


export default authService
    
    

