import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../../hooks/useStore';
import { updateMovies } from '../../../../../store/watchListSlice';
import { fetchTrailer } from '../../../../../store/trailerSlice';
// Styles
import styles from '../../index.module.scss';

interface Card {
    id: number;
    title: string;
    poster_path: string;
    voteAverage: number;
}

const MovieMainCard: React.FC<Card> = ({
    id,
    title,
    poster_path,
    voteAverage,
}) => {
    const dispatch = useAppDispatch();

    const handleAddMoviesToWatchlist = () => {
        dispatch(updateMovies([{ id, title, poster_path, voteAverage }]));
    };
    const handleAddIdToFunction = (idNumber: number) => {
        dispatch(fetchTrailer(idNumber));
    };

    const IMAGE_PATH_URL: string = 'https://image.tmdb.org/t/p/w500/';

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
                    <Link to="watchTrailer">
                        <button
                            className={styles.slider__wathc__btn}
                            onClick={() => handleAddIdToFunction(id)}
                        >
                            Watch
                        </button>
                    </Link>
                </div>
            </div>
            <img
                src={`${IMAGE_PATH_URL}${poster_path}`}
                alt="rick"
                className={styles.slider__list__image}
            />
        </div>
    );
};

export default MovieMainCard;
