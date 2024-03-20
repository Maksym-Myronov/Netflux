import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './moviesSlice';
import watchlistReducer from './watchListSlice';
import topRatedReducer from './topRatedSlice';
import trailerReducer from './trailerSlice';
import searchMovieReducer from './searchMovieSlice';

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        watchList: watchlistReducer,
        topRatedMovies: topRatedReducer,
        trailer: trailerReducer,
        search: searchMovieReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
