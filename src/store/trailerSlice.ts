import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type Video = {
	key: string;
	name: string;
	id: string;
};

type Trailer = {
	videos: {
		results: Video[];
	};
	original_title: string;
	poster_path: string;
	overview: string;
	title: string;
};

type MovieListArray = {
	trailer: Trailer;
	status: string;
	error: string | null;
};

const initialState: MovieListArray = {
	trailer: {
		videos: { results: [] },
		original_title: '',
		poster_path: '',
		overview: '',
		title: ''
	},
	status: 'idle',
	error: null
};

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchTrailer = createAsyncThunk<
	Trailer,
	number,
	{ rejectValue: string }
>('trailers/fetchTrailer', async (id, { rejectWithValue }) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				Accept: 'application/json'
			}
		}
	);
	if (!response.ok) {
		return rejectWithValue('Network response was not ok');
	}

	return response.json();
});

const trailerSlice = createSlice({
	name: 'trailers',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTrailer.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(
				fetchTrailer.fulfilled,
				(state, action: PayloadAction<Trailer>) => {
					state.status = 'succeeded';
					state.trailer = action.payload;
					state.error = null;
				}
			)
			.addCase(fetchTrailer.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.payload || 'Some error occurred';
			});
	}
});

export default trailerSlice.reducer;
