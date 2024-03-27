import React, { ChangeEvent, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SitcomResults } from './SitcomResults';
import { useAppSelector } from '../../../hooks/useStore';
import { useIdFunction } from '../../../hooks/useIdFunction';
// Styles
import styles from '../Watchlist/index.module.scss';

export const Sitcom: React.FC = () => {
	const genresList = useAppSelector((state) => state.genres);
	console.log(genresList);
	const data = genresList?.genres?.results;
	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage: number = 8;
	const startIndex: number = (currentPage - 1) * itemsPerPage;
	const endIndex: number = startIndex + itemsPerPage;
	const currentItems = data?.slice(startIndex, endIndex);
	const [handleAddIdToFunction] = useIdFunction();

	const handlePaginationChange = (
		event: ChangeEvent<unknown>,
		page: number
	) => {
		console.log(event);
		setCurrentPage(page);
	};

	useEffect(() => {
		setCurrentPage(1);
	}, [genresList]);

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
							count={Math.ceil(Number(data && data.length) / itemsPerPage)}
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
