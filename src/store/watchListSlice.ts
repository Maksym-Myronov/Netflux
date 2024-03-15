import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
};

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        updateMovies: (state, action) => {
            action.payload.forEach((item) => {
                const isDuplicate = state.movies.some(
                    (items) => items.id === item.id
                );
                if (!isDuplicate) {
                    return state.movies.push(...action.payload);
                }
            });
        },
        removeMoviesFromArray: (state, action) => {
            state.movies = state.movies.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export default watchListSlice.reducer;
export const { updateMovies, removeMoviesFromArray } = watchListSlice.actions;
