import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
	user: user ? user : null,
	token: token ? token : null,
    // isError: false,
    // isSucces: false,
    // message: ''
}

// export const register = createAsyncThunk('auth/register', async (userData) => {
// 	try {
// 		return authService.register(userData)
// 	} catch (error) {
// 		console.log(error)
// 	}
// })

export const register = createAsyncThunk(
    "auth/register",
    async (user) => {
        try {
          return await authService.register(user);
        } catch (error) {
          console.error(error);
        }
      }
    );
    
    async (user, thunkAPI) => {
      try {
        return await authService.register(user);
      } catch (error) {
        const message = error.response.data.errors.map(
            (error) => `${error.msg} | `
            )
  
        return thunkAPI.rejectWithValue(message);
      }
    }


// export const login = createAsyncThunk('auth/login', async (userData) => {
// 	try {
// 		return authService.login(userData)
// 	} catch (error) {
// 		console.log(error)
// 	}
// })

export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = error.response.data.error
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
	try {
		return authService.logout()
	} catch (error) {
		console.log(error)
	}
})



export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
    //  reducers: {
    //     reset: (state) => {
    //         state.isError = false
    //         state.isSucces = false
    //         state.message = ''
    //     },
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(login.fulfilled, (state, action) => {
// 				state.user = action.payload.user
// 				state.token = action.payload.token
// 			})
// 			.addCase(logout.fulfilled, (state, action) => {
// 				;(state.user = null), (state.token = null)
// 			})
// 	},
// })
extraReducers: (builder) => {
            builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user,
                state.token = action.payload.token,
                state.isSucces = true,
                state.message = action.payload.message
            })
    
            .addCase(login.rejected, (state, action) => {
                state.isError = true,
                state.message = action.payload
            })
    
            .addCase(logout.fulfilled,(state) => {
                state.user = null,
                state.token = null
            })
    
            .addCase(register.fulfilled, (state, action) => {
                state.isSucces = true,
                state.message = action.payload.message
            })
            
            .addCase(register.rejected, (state, action) => {
                state.isError = true,
                state.message = action.payload
            })
        }
    })
    
    export const { reset } = authSlice.actions

export default authSlice.reducer

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import authService from './authService'

// const user = JSON.parse(localStorage.getItem('user'))
// const token = JSON.parse(localStorage.getItem('token'))

// const initialState = {
//     user: user ? user : null,
//     token: token || null,
    // isError: false,
    // isSucces: false,
    // message: ''
// }

// export const register = createAsyncThunk(
//     "auth/register",
//     async (user) => {
//         try {
//           return await authService.register(user);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     );
    
    // async (user, thunkAPI) => {
    //   try {
    //     return await authService.register(user);
    //   } catch (error) {
    //     const message = error.response.data.errors.map(
    //         (error) => `${error.msg} | `
    //         )
  
    //     return thunkAPI.rejectWithValue(message);
    //   }
    // }

    // export const login = createAsyncThunk("auth/login", async (user) => {
    //     try {
    //       return await authService.login(user);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   });
      
// export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
//     try {
//         return await authService.login(user)
//     } catch (error) {
//         const message = error.response.data.error
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// export const logout = createAsyncThunk('auth/logout', async() => {
//     try {
//         return await authService.logout()
//     } catch (error) {
//         console.error(error)
//     }
// })

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
    // reducers: {
        // reset: (state) => {
        //     state.isError = false
        //     state.isSucces = false
        //     state.message = ''
        // },
    // },

    // extraReducers: (builder) => {
    //     builder.addCase(login.fulfilled, (state, action) => {
    //       state.user = action.payload.user
    //       state.token = action.payload.token
    //     })
    //   },
    //  })
     

//     extraReducers: (builder) => {
//         builder
//         .addCase(login.fulfilled, (state, action) => {
//             state.user = action.payload.user,
//             state.token = action.payload.token,
//             state.isSucces = true,
//             state.message = action.payload.message
//         })

//         .addCase(login.rejected, (state, action) => {
//             state.isError = true,
//             state.message = action.payload
//         })

//         .addCase(logout.fulfilled,(state) => {
//             state.user = null,
//             state.token = null
//         })

//         .addCase(register.fulfilled, (state, action) => {
//             state.isSucces = true,
//             state.message = action.payload.message
//         })
        
//         .addCase(register.rejected, (state, action) => {
//             state.isError = true,
//             state.message = action.payload
//         })
//     }
// })

// export const { reset } = authSlice.actions
// export default authSlice.reducer