import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WatchlistCards from './WatchlistCards';
// Images
import fatalImages from '../../../assets/images/Fatal Error.svg';
// Styles
import styles from './index.module.scss';

interface RootState {
    watchList: object;
}
export const Watchlist: React.FC = () => {
    const watchlist = useSelector((state: RootState) => state.watchList);

    useEffect(() => {
        console.log(watchlist);
    }, [watchlist]);

    return (
        <div className={styles.watchlist}>
            {watchlist && watchlist.movies && watchlist.movies.length === 0 ? (
                <div className={styles.watchlist__error__card}>
                    <img src={fatalImages} alt="images" />
                    <h1 className={styles.watchlist__error__title}>OOPS!</h1>
                    <h1>You dont have ane movies on your watchlist</h1>
                </div>
            ) : (
                watchlist &&
                watchlist.movies &&
                watchlist.movies.map((item) => (
                    <WatchlistCards
                        key={item.id}
                        id={item.id}
                        posterPath={item.poster_path}
                        title={item.title}
                        rating={item.voteAverage}
                    />
                ))
            )}
        </div>
    );
};
