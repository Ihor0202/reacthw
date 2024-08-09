import {IPost} from "../../model/IPost";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/api.service";
import {AxiosError} from "axios";


type postSliceType = {
    posts: IPost[],
    isLoaded: boolean
    post: IPost | null
}

const initialState: postSliceType = {
    posts: [],
    isLoaded: false,
    post: null
}

const loadPost = createAsyncThunk('userSlice/loadPost',
    async (id: number, thunkAPI) => {
    try {
        let post = await postService.getById(id)
        return thunkAPI.fulfillWithValue(post)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error)
    }
    })

const loadPosts = createAsyncThunk('userSlice/loadPosts',
    async (_, thunkAPI) => {
    try {
        let posts = await postService.getAll()
        return thunkAPI.fulfillWithValue(posts)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error)
    }
})


export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPosts.fulfilled, (state,action) => {
        state.posts = action.payload
    })
            .addCase(loadPost.fulfilled, (state, action)=> {
                state.post = action.payload
})
})


export const postActions = {
    ...postSlice,
    loadPosts,
    loadPost
}