import { configureStore } from '@reduxjs/toolkit'

import auth from './auth/authSlice'

export const store = configureStore({
	reducer: { auth },
})


// import { configureStore } from '@reduxjs/toolkit'
// import auth from '../redux/auth/authSlice'
// import posts from '../../src/redux/posts/postsSlice'

// export const store = configureStore({
//     reducer: { auth },
    // reducer: { auth, posts }
// })