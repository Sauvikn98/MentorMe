import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

export const createMentor = createAsyncThunk(
    'user/create-mentor',
    async (userData, thunkAPI) => {
      try {
        console.log({userData})
        return await authService.createMentor(userData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

export const createMentee = createAsyncThunk(
  'profile/create-mentee',
  async (userData, thunkAPI) => {
    try {
      return await authService.createMentee(userData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const login = createAsyncThunk(
    'profile/login',
    async (userData, thunkAPI) => {
      try {
        return await authService.login(userData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  export const getCurrentUser = createAsyncThunk(
    'profile/currentUser',
    async (userData, thunkAPI) => {
      try {
        return await authService.getCurrentUser(userData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

export const addEducation = createAsyncThunk(
    'profile/add-education',
    async (userData, thunkAPI) => {
      try {
        return await authService.addEducation(userData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const addExperience = createAsyncThunk(
    'profile/add-experience',
    async (userData, thunkAPI) => {
      try {
        return await authService.addExperience(userData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const requestForMentorship = createAsyncThunk(
    'connection/request',
    async (userData, thunkAPI) => {
      try {
        return await authService.requestForMentorship(userData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const approveMentorship = createAsyncThunk(
    'connection/approve',
    async (userData, thunkAPI) => {
      try {
        return await authService.approveMentorship(userData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )



const initialState = {
    isLoading: false,
    isError: false,
    isLoggedIn: false,
    user: null,
    jwt_token:''
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        
        // setUserProfile: (state, action)=> {
        //     state.user = action.payload,
        //     state.isLoggedIn = true
        // },
        signOutUser: (state)=> {
          state.isLoading= false,
          state.isError= false,
          state.isLoggedIn= false,
          state.user= null,
          state.jwt_token=''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createMentor.pending, (state, action)=> {
            state.isLoading = true
        })
        builder.addCase(createMentor.fulfilled, (state, action) => {
          state.isLoading = false,
          state.jwt_token = action.payload.token
          state.isLoggedIn = true,
          state.isError = false
        })
        builder.addCase(createMentor.rejected, (state, action) => {
            state.isLoading = false,
            state.jwt_token = "",
            state.isLoggedIn = false,
            state.isError = true
          })

        builder.addCase(createMentee.pending, (state, action)=> {
            state.isLoading = true
        })
        builder.addCase(createMentee.fulfilled, (state, action) => {
          state.isLoading = false,
          state.jwt_token = action.payload.token,
          state.isLoggedIn = true,
          state.isError = false
        })
        builder.addCase(createMentee.rejected, (state, action) => {
            state.isLoading = false,
            state.jwt_token = "",
            state.isLoggedIn = false,
            state.isError = true
        })

        builder.addCase(login.pending, (state, action)=> {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
          state.isLoading = false,
          state.jwt_token = action.payload.token, 
          state.user = action.payload.user, 
          state.isLoggedIn = true,
          state.isError = false
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false,
            state.jwt_token = "",
            state.isLoggedIn = false,
            state.isError = true
          })

          builder.addCase(getCurrentUser.pending, (state, action)=> {
            state.isLoading = true
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
          state.isLoading = false,
          state.user = action.payload, 
          state.isError = false
        })
        builder.addCase(getCurrentUser.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true
          })

        builder.addCase(addEducation.pending, (state, action)=> {
            state.isLoading = true
        })
        builder.addCase(addEducation.fulfilled, (state, action) => {
          state.isLoading = false,
          state.user = action.payload
        })
        builder.addCase(addEducation.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true
        })

        builder.addCase(addExperience.pending, (state, action)=> {
            state.isLoading = true
        })
        builder.addCase(addExperience.fulfilled, (state, action) => {
          state.isLoading = false,
          state.user = action.payload
        })
        builder.addCase(addExperience.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true
        })

      },
})

// Action creators are generated for each case reducer function
export const { signOutUser} = authSlice.actions

export default authSlice.reducer