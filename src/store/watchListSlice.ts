import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
	id: number;
	title: string;
	poster_path: string;
	voteAverage: number;
}

export type Movies = {
	movies: Movie[];
};

const initialState: Movies = {
	movies: []
};

const watchListSlice = createSlice({
	name: 'watchList',
	initialState,
	reducers: {
		updateMovies: (state, action: PayloadAction<Movie[]>) => {
			const uniqueMovies = action.payload.filter(
				(item) => !state.movies.some((movie) => movie.id === item.id)
			);
			state.movies.push(...uniqueMovies);
		},
		removeMoviesFromArray: (state, action: PayloadAction<number>) => {
			state.movies = state.movies.filter((item) => item.id !== action.payload);
		}
	}
});

export default watchListSlice.reducer;
export const { updateMovies, removeMoviesFromArray } = watchListSlice.actions;
