import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMovies } from '../../../../../store/watchListSlice';
// Styles
import styles from '../../index.module.scss';

const MovieMainCard: React.FC = ({ id, title, poster_path, voteAverage }) => {
    const dispatch = useDispatch();

    const handleAddMoviesToWatchlist = () => {
        dispatch(updateMovies([{ id, title, poster_path, voteAverage }]));
    };

    return (
        <div className={styles.slider__cards}>
            <div className={styles.slider__card}>
                <p className={styles.slider__movie__name}>
                    {title.length > 17 ? `${title.slice(0, 15)}...` : title}
                </p>
                <div className={styles.slider__episode__count}>
                    <p className={styles.slider__episode__name}>Reating</p>
                    <p className={styles.slider__episode__name}>
                        {Math.ceil(voteAverage)}/10 stars
                    </p>
                </div>
                <div className={styles.slider__episode__btn}>
                    <button
                        onClick={handleAddMoviesToWatchlist}
                        className={styles.slider__plus__btn}
                    >
                        +
                    </button>
                    <button className={styles.slider__wathc__btn}>Watch</button>
                </div>
            </div>
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="rick"
                className={styles.slider__list__image}
            />
        </div>
    );
};

export default MovieMainCard;
