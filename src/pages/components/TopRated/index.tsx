import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies } from '../../../store/topRatedSlice';
import { TopRatedCards } from './TopRatedCards';
import styles from '../Watchlist/index.module.scss';

export const TopRated: React.FC = () => {
    const topRatedMoviesList = useSelector((state) => state.topRatedMovies);
    console.log(topRatedMoviesList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopRatedMovies());
    }, [dispatch]);

    return (
        <div className={styles.watchlist}>
            {topRatedMoviesList &&
                topRatedMoviesList.rated &&
                topRatedMoviesList.rated.results &&
                topRatedMoviesList.rated.results.slice(0, 8) &&
                topRatedMoviesList.rated.results
                    .slice(0, 8)
                    .map((item) => (
                        <TopRatedCards
                            key={item.id}
                            title={item.title}
                            posterPath={item.poster_path}
                            rating={item.vote_average}
                        />
                    ))}
        </div>
    );
};
