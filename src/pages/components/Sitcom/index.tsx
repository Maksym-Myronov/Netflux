import React, { ChangeEvent, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
// Styles
import styles from '../Watchlist/index.module.scss';
import { SitcomResults } from './SitcomResults';
import { useAppSelector } from '../../../hooks/useStore';
import { useIdFunction } from '../../../hooks/useIdFunction.ts';

export const Sitcom: React.FC = () => {
	interface MovieData {
		key: number;
		id: number;
		title: string;
		poster_path: string;
		handleAddIdToFunction: (id: number) => void;
	}

	const genresList = useAppSelector((state) => state.genres);
	const data: object[] = genresList?.genres?.results;
	console.log(data);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage: number = 8;

	const startIndex: number = (currentPage - 1) * itemsPerPage;
	const endIndex: number = startIndex + itemsPerPage;
	const currentItems: object[] = data && data.slice(startIndex, endIndex);
	const [handleAddIdToFunction] = useIdFunction();

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
				currentItems.map((item) => (
					<SitcomResults
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
