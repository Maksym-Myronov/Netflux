import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies } from '../../../store/topRatedSlice';
import { TopRatedCards } from './TopRatedCards';
// Images
import preBtn from '../../../assets/images/Prev.svg';
import nextBtn from '../../../assets/images/Next.svg';
// Styles
import styles from '../Watchlist/index.module.scss';

export const TopRated: React.FC = () => {
    const topRatedMoviesList = useSelector((state) => state.topRatedMovies);
    const data: object[] = topRatedMoviesList.rated.results;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 8;

    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const currentItems: object[] = data && data.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(data.length / itemsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopRatedMovies());
    }, [dispatch]);

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
                <button onClick={handlePreviousPage} className={styles.watchlist__pagination__prev}>
                    <img src={preBtn}  alt="nextBtn" />
                </button>
                <p className={styles.watchlist__pagination__number}>
                    {currentPage}
                </p>
                <button onClick={handleNextPage} className={styles.watchlist__pagination__next}>
                    <img src={nextBtn} alt="preBtn" />
                </button>
            </div>
        </div>
    );
};
