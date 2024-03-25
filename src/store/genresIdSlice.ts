import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type GenresId = {
	id: number;
	name: string;
};

type GenresIdArray = {
	genresId: GenresId[];
	status: string;
	error: null;
};

const initialState: GenresIdArray = {
	genresId: [],
	status: 'idle',
	error: null
};

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchGenresId = createAsyncThunk(
	'genresId/fetchGenresId',
	async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/genre/movie/list?language=en`,
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

const genresIdSlice = createSlice({
	name: 'genresId',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGenresId.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchGenresId.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.genresId = action.payload;
			})
			.addCase(fetchGenresId.rejected, (state) => {
				state.status = 'failed';
			});
	}
});

export default genresIdSlice.reducer;
