import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from './useStore';
import { fetchSearchMovie } from '../store/searchMovieSlice';

export const useInputData = () => {
	const [text, setText] = useState<string>('');
	const searchMovie = useAppSelector((state) => state.search);
	const sortedMoviesArray = searchMovie?.search?.results
		?.map((item) => item)
		.sort((b) => text.localeCompare(b));
	const dispatch = useAppDispatch();
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { value } = e.target;
		setText(value);
		dispatch(fetchSearchMovie(value));
	};

	return [onInputChange, sortedMoviesArray, text, searchMovie];
};
