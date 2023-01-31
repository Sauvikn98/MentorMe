import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import postService from './postService'

export const addPost = createAsyncThunk(
    'post/add-post',
    async (postData, thunkAPI) => {
      try {
        console.log({postData})
        return await postService.addPost(postData)
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

export const getPostsFromMentors = createAsyncThunk(
  'post/get-post-from-mentors',
  async (jwt_token, thunkAPI) => {
    try {
      return await postService.getPostsFromMentors(jwt_token)
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

export const getPostsFromMentees = createAsyncThunk(
    'post/get-post-from-mentees',
    async (jwt_token, thunkAPI) => {
      try {
        return await postService.getPostsFromMentees(jwt_token)
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
    posts: null
}

export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
       
        builder.addCase(addPost.pending, (state, action)=> {
            state.isLoading = true
        })
        builder.addCase(addPost.fulfilled, (state, action) => {
          state.isLoading = false,
          state.isError = false
        })
        builder.addCase(addPost.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true
          })
       
        builder.addCase(getPostsFromMentors.pending, (state, action)=> {
            state.isLoading = true
        })
        builder.addCase(getPostsFromMentors.fulfilled, (state, action) => {
          state.isLoading = false,
         state.posts =action.payload,
          state.isError = false
        })
        builder.addCase(getPostsFromMentors.rejected, (state, action) => {
            state.isLoading = false,
            state.posts = null,
            state.isError = true
          })
          builder.addCase(getPostsFromMentees.pending, (state, action)=> {
            state.isLoading = true
        })
        builder.addCase(getPostsFromMentees.fulfilled, (state, action) => {
          state.isLoading = false,
         state.posts =action.payload,
          state.isError = false
        })
        builder.addCase(getPostsFromMentees.rejected, (state, action) => {
            state.isLoading = false,
            state.posts = null,
            state.isError = true
          })

      },
})

// Action creators are generated for each case reducer function
export const { } = postSlice.actions

export default postSlice.reducer