import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { fetchTopRatedMovies } from '../../../store/topRatedSlice';
import { TopRatedCards } from './TopRatedCards';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Styles
import styles from '../Watchlist/index.module.scss';

export const TopRated: React.FC = () => {
    const topRatedMoviesList = useAppSelector((state) => state.topRatedMovies);
    const data: object[] = topRatedMoviesList.rated.results;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 8;

    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const currentItems: object[] = data && data.slice(startIndex, endIndex);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTopRatedMovies());
    }, [dispatch]);
    const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const theme = createTheme({
        palette: {
            ochre: {
                main: '#E3D026',
                light: '#fff',
                dark: '#A29415',
                contrastText: '#242105',
            },
        },
    });

    return (
        <div className={styles.watchlist}>
            {currentItems &&
                currentItems.map((item) => (
                    <TopRatedCards
                        key={item.id}
                        title={item.title}
                        posterPath={item.poster_path}
                        rating={item.vote_average}
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
                            className={styles.whiteText}
                            sx={{ bgcolor: 'ochre.light' }}
                        />
                    </Stack>
                </ThemeProvider>
            </div>
        </div>
    );
};
