import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './moviesSlice.ts'
import watchlistReducer from './watchListSlice.ts'

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        watchList: watchlistReducer
    }
})