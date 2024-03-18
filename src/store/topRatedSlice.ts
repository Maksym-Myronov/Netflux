import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const API_KEY = import.meta.env.VITE_API_KEY;

type Movie = {
    rated: object[];
    status: string;
    error: null;
};

const initialState: Movie = {
    rated: [],
    status: 'idle',
    error: null,
};

export const fetchTopRatedMovies = createAsyncThunk(
    'topRated/fetchTopRatedMovies',
    async () => {
        const response = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    Accept: 'application/json',
                },
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
);

const topRatedSlice = createSlice({
    name: 'topRated',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopRatedMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                fetchTopRatedMovies.fulfilled,
                (state, action: PayloadAction<object[]>) => {
                    state.status = 'succeeded';
                    state.rated = action.payload;
                }
            )
            .addCase(fetchTopRatedMovies.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default topRatedSlice.reducer;
