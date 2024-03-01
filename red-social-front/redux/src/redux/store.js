import { configureStore } from '@reduxjs/toolkit'
import auth from '../redux/auth/authSlice'
import posts from '../../src/redux/posts/postsSlice'

export const store = configureStore({
    reducer: { auth, posts }
})