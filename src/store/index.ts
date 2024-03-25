import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './moviesSlice';
import watchlistReducer from './watchListSlice';
import topRatedReducer from './topRatedSlice';
import trailerReducer from './trailerSlice';
import searchMovieReducer from './searchMovieSlice';
import genresReducer from './genresSlice';
import genresIdReducer from './genresIdSlice';

export const store = configureStore({
	reducer: {
		movie: movieReducer,
		watchList: watchlistReducer,
		topRatedMovies: topRatedReducer,
		trailer: trailerReducer,
		search: searchMovieReducer,
		genres: genresReducer,
		genresId: genresIdReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
