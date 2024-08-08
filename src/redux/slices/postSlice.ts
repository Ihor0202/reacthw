import {createSlice} from "@reduxjs/toolkit";
import {IPosts} from "../../model/IPosts";
import {loadPosts} from "../reducers/post.extra.reducers";

type postSliceType = {
    posts: IPosts[]
}

let postInitState: postSliceType = {
    posts: [],
}


export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadPosts.fulfilled,
        (state, action) => {
            state.posts = action.payload
        })
})
export const postActions = {
    ...postSlice.actions,
    loadPosts
}