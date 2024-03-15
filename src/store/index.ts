import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './moviesSlice';
import watchlistReducer from './watchListSlice';
import topRatedReducer from './topRatedSlice';

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        watchList: watchlistReducer,
        topRatedMovies: topRatedReducer,
    },
});
