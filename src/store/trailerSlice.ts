import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type MoviesList = {
    id: number;
    title: string;
    poster_path: string;
    voteAverage: number;
};

type MovieListArray = {
    trailer: object[];
    status: string;
    error: null;
};

const initialState: MovieListArray = {
    trailer: [],
    status: 'idle',
    error: null,
};

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchTrailer = createAsyncThunk<
    MoviesList[],
    number,
    { rejectValue: string }
>('trailers/fetchTrailer', async (id, { rejectWithValue }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                Accept: 'application/json',
            },
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
                (state, action: PayloadAction<object[]>) => {
                    state.status = 'succeeded';
                    state.trailer = action.payload;
                }
            )
            .addCase(fetchTrailer.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export default trailerSlice.reducer;
