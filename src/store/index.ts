import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './moviesSlice.ts'

export const store = configureStore({
    reducer: {
        movie: movieReducer
    }
})