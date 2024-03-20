import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { fetchTopRatedMovies } from '../../../store/topRatedSlice';
import { TopRatedCards } from './TopRatedCards';
// Styles
import styles from '../Watchlist/index.module.scss';

export const TopRated: React.FC = () => {
    const topRatedMoviesList = useAppSelector((state) => state.topRatedMovies.rated);
    const data: object[] = topRatedMoviesList && topRatedMoviesList.results;
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
            primary: {
                main: '#E3D026',
                light: '#fff',
                dark: '#A29415',
                contrastText: '#242105',
            },
            background: {
                default: '#fff',
            },
            text: {
                primary: '#000',
            },
        },
    });

    return (
        <div className={styles.watchlist}>
            {currentItems &&
                currentItems.map((item) => (
                    <TopRatedCards
                        key={item.id}
                        id={item.id}
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
                            sx={{
                                '& .MuiPaginationItem-page': { color: 'white' },
                                '& .MuiPaginationItem-page.Mui-selected': {
                                    color: '#E3D026',
                                },
                                '& .MuiPaginationItem-root': {
                                    borderColor: 'white',
                                },
                                '& .MuiSvgIcon-root': {
                                    fill: 'white',
                                },
                            }}
                        />
                    </Stack>
                </ThemeProvider>
            </div>
        </div>
    );
};
