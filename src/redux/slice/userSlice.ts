import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../model/IUsers";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";


type userSliceType = {
    users: IUser[],
    isLoaded: boolean
}

const initialState: userSliceType = {
    users: [],
    isLoaded: false
}

const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    try {
        let users = await userService.getAll()
        return thunkAPI.fulfillWithValue(users)
    } catch (e) {
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error)
    }
})


export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state,action) => {
        state.users = action.payload
    })
})