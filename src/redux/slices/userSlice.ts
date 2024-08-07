import {IUsers} from "../../model/IUsers";
import {createSlice, isFulfilled} from "@reduxjs/toolkit";

import {loadUsers} from "../reducers/user.exxtre.reducers";

type userSliceType = {
    users: IUsers[]
    isLoaded: boolean
}
let userInitState: userSliceType = {
    users: [],
    isLoaded: false
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled,
        (state, action) => {
            state.users = action.payload
        })
        .addMatcher(isFulfilled(loadUsers), (state)=> {
            state.isLoaded = true
        })
})
export const userActions = {
    ...userSlice.actions,
    loadUsers
}