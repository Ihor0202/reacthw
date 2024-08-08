import {configureStore} from "@reduxjs/toolkit";

import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./slices/userSlice";
import {postSlice} from "./slices/postSlice";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
})
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()

// export const useAppPostSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
// export const useAppPostDispatch = useDispatch.withTypes<typeof store.dispatch>()



// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
//
// export type RootState = ReturnType<typeof store.getState>
// export const useAppSelector = useSelector.withTypes<RootState>()

