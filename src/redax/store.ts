import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type CounterStateType = {
    value: number
}

let initStateCounter: CounterStateType = {
    value: 0,
}

let counterSlice1 = createSlice({
    name: 'counter/Slice1',
    initialState: initStateCounter,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },

        decrement: (state) => {
            state.value = state.value - 1

        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload
        }
    }
});

export const {increment,
decrement,
incrementByAmount}
    = counterSlice1.actions

export const store = configureStore({
    reducer: {
        slice: counterSlice1.reducer
    }
});



export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootState>()

