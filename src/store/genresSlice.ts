import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type GeneralGenres = {
	id: number;
	originalTitle: string;
	overview: string;
	posterPath: string;
	title: string;
	voteAverage: number;
	releaseDate: string;
};

type Genres = {
	genres: GeneralGenres[];
	status: string;
	error: null;
};

const initialState: Genres = {
	genres: [],
	status: 'idle',
	error: null
};

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchGenresMovies = createAsyncThunk(
	'genres/fetchGenresMovies',
	async (value) => {
		const response = await fetch(
			`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${value}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					Accept: 'application/json'
				}
			}
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	}
);

const genresSlice = createSlice({
	name: 'genres',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGenresMovies.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(
				fetchGenresMovies.fulfilled,
				(state, action: PayloadAction<GeneralGenres[]>) => {
					state.status = 'succeeded';
					state.genres = action.payload;
				}
			)
			.addCase(fetchGenresMovies.rejected, (state) => {
				state.status = 'failed';
			});
	}
});

export default genresSlice.reducer;
