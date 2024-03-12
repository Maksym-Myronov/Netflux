import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    list: [],
    status: 'idle',
    error: null,
}

const API_KEY = import.meta.env.VITE_API_KEY;
export const fetchMovieData = createAsyncThunk(
    'movie/fetchMovieData',
    async () => {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query=Spider-Man%3A%20No%20Way%20Home&include_adult=false&language=en-US&page=1', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
);

const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovieData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchMovieData.rejected, (state) => {
                state.status = 'failed';
            });
    }
})

export default moviesSlice.reducer;