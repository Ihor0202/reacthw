import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUsers} from "../model/IUsers";
import {getUsers} from "../servise/api.servise";
import axios, {AxiosError} from "axios";
import {useDispatch, useSelector} from "react-redux";

type userSliceType = {
    user: IUsers[]
    isLoaded: boolean
}

let userInitState: userSliceType = {
    user: [],
    isLoaded: false
}

let loadUsers = createAsyncThunk(
    'createSlice/loadUsers',
         async (_, thunkAPI)=> {
           try {
               let response = await getUsers()
               return  thunkAPI.rejectWithValue(response)

           }catch (e) {
               e as AxiosError
               return  thunkAPI.rejectWithValue(e)
           }
        }

)

let userSlice = createSlice({
    name: 'userSlice1',
    initialState: userInitState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadUsers.fulfilled, (state,action) => {
            state.user = action.payload
        })
    }
})


const useActions = {
    ...userSlice.actions,
    loadUsers

}

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer

    }
})
export const useAppSelector = useSelector.withTypes<Ret
    // <typeof store.getState>
export const useAppDispatch = useDispatch.withTypes<R




















// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
//
// export type RootState = ReturnType<typeof store.getState>
// export const useAppSelector = useSelector.withTypes<RootState>()

