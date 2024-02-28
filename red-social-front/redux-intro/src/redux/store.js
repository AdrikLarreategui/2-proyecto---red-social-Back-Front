import { configureStore } from '@reduxjs/toolkit'
import auth from '../redux/authSlice'

export const store = configureStore ({
    reducer: { auth }
})

