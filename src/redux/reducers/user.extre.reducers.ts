import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUsers} from "../../servise/api.servise";
import {AxiosError} from "axios";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            let response = await getUsers()
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            let e1 = e as AxiosError
            return thunkAPI.rejectWithValue(e1)
        }
    }
)
