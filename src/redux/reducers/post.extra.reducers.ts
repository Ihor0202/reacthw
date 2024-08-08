import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts} from "../../servise/api.servise";
import {AxiosError} from "axios";

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            let response = await getPosts()
            console.log('yes')
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            let e1 = e as AxiosError
            console.log('error')
            return thunkAPI.rejectWithValue(e1)
        }
    }
)