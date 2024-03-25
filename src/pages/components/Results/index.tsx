import React, { ChangeEvent, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useInputData } from '../../../hooks/useInputData';
import { NewResults } from './NewResults';
import { useAppDispatch } from '../../../hooks/useStore';
import { fetchTopRatedMovies } from '../../../store/topRatedSlice';
import { useIdFunction } from '../../../hooks/useIdFunction';
// Styles
import styles from '../Watchlist/index.module.scss';

export const Results: React.FC = () => {
	interface MovieData {
		key: number;
		id: number;
		title: string;
		poster_path: string;
		handleAddIdToFunction: (id: number) => void;
	}

	const [onInputChange, sortedMoviesArray, text, searchMovie] = useInputData();
	const data = sortedMoviesArray;
	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage: number = 8;
	const [handleAddIdToFunction] = useIdFunction();
	const startIndex: number = (currentPage - 1) * itemsPerPage;
	const endIndex: number = startIndex + itemsPerPage;
	const currentItems: MovieData[] = data && data.slice(startIndex, endIndex);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTopRatedMovies());
	}, [dispatch]);
	const handlePaginationChange = (
		event: ChangeEvent<unknown>,
		page: number
	) => {
		setCurrentPage(page);
	};

	const theme = createTheme({
		palette: {
			primary: {
				main: '#E3D026',
				light: '#fff',
				dark: '#A29415',
				contrastText: '#242105'
			},
			background: {
				default: '#fff'
			},
			text: {
				primary: '#000'
			}
		}
	});

	return (
		<div className={styles.watchlist}>
			{currentItems &&
				currentItems.map((item: MovieData) => (
					<NewResults
						key={item.id}
						id={item.id}
						title={item.title}
						posterPath={item.poster_path}
						handleAddIdToFunction={handleAddIdToFunction}
					/>
				))}
			<div className={styles.watchlist__pagination}>
				<ThemeProvider theme={theme}>
					<Stack spacing={2}>
						<Pagination
							count={Math.ceil(data && data.length / itemsPerPage)}
							shape="rounded"
							page={currentPage}
							onChange={handlePaginationChange}
							variant="outlined"
							sx={{
								'& .MuiPaginationItem-page': { color: 'white' },
								'& .MuiPaginationItem-page.Mui-selected': {
									color: '#E3D026'
								},
								'& .MuiPaginationItem-root': {
									borderColor: 'white'
								},
								'& .MuiSvgIcon-root': {
									fill: 'white'
								}
							}}
						/>
					</Stack>
				</ThemeProvider>
			</div>
		</div>
	);
};
