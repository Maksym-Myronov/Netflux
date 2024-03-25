import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type Movie = {
	search: object[];
	status: string;
	error: null;
};

const initialState: Movie = {
	search: [],
	status: 'idle',
	error: null
};

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchSearchMovie = createAsyncThunk(
	'searchMovie/fetchSearchMovie',
	async (value) => {
		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=1`,
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
		return response.json();
	}
);

const searchMovieSlice = createSlice({
	name: 'searchMovie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSearchMovie.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(
				fetchSearchMovie.fulfilled,
				(state, action: PayloadAction<object[]>) => {
					state.status = 'succeeded';
					state.search = action.payload;
				}
			)
			.addCase(fetchSearchMovie.rejected, (state) => {
				state.status = 'failed';
			});
	}
});

export default searchMovieSlice.reducer;
