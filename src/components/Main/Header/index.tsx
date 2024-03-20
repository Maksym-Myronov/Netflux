import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { fetchSearchMovie } from '../../../store/searchMovieSlice';
import { fetchTrailer } from '../../../store/trailerSlice';
// Images
import searchImage from '../../../assets/images/Search....svg';
import filterImage from '../../../assets/images/Filter.svg';
// Styles
import styles from './index.module.scss';

export const Header: React.FC = () => {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();
    const searchMovie = useAppSelector((state) => state.search);
    const IMAGE_PATH_URL: string = 'https://image.tmdb.org/t/p/w500';
    const onInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setText(value);
        dispatch(fetchSearchMovie(value));
    };

    const handleAddIdToFunction = (idNumber: number) => {
        dispatch(fetchTrailer(idNumber));
    };

    return (
        <div className={styles.header}>
            <div>
                <Link to="#" className={styles.header__link}>
                    Movies
                </Link>
                <Link to="#" className={styles.header__link}>
                    TV Shows
                </Link>
                <Link to="#" className={styles.header__link}>
                    Anime
                </Link>
            </div>
            <div>
                <div className={styles.header__input__container}>
                    <img
                        src={searchImage}
                        alt="searchImage"
                        className={styles.header__images}
                    />
                    <div className={styles.header__input__block}>
                        <input
                            placeholder="Search"
                            className={styles.header__input}
                            value={text}
                            onChange={onInputChange}
                        />
                        {text && (
                            <ul className={styles.header__list}>
                                {searchMovie?.search?.results
                                    ?.slice(0, 3)
                                    .map((item) => (
                                        <Link
                                            to="/watchTrailer"
                                            onClick={() =>
                                                handleAddIdToFunction(item.id)
                                            }
                                            key={item.id}
                                        >
                                            <div
                                                className={
                                                    styles.header__search
                                                }
                                            >
                                                <img
                                                    src={`${IMAGE_PATH_URL}${item.poster_path}`}
                                                    alt="poster"
                                                    style={{
                                                        width: '50px',
                                                        height: '70px',
                                                    }}
                                                />
                                                <div>
                                                    <li
                                                        className={
                                                            styles.header__title
                                                        }
                                                    >
                                                        {item.title.slice(
                                                            0,
                                                            20
                                                        )}
                                                    </li>
                                                    <span
                                                        className={
                                                            styles.header__search__span
                                                        }
                                                    >
                                                        {item.release_date.slice(
                                                            0,
                                                            4
                                                        )}
                                                    </span>
                                                    <p
                                                        className={
                                                            styles.header__search__cost
                                                        }
                                                    >
                                                        FOR FREE
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                <Link to="/"><span className={styles.header__search__results}>ALL RESULTS</span></Link>
                            </ul>
                        )}
                    </div>
                    <img
                        src={filterImage}
                        alt="filterImage"
                        className={styles.header__images}
                    />
                </div>
            </div>
        </div>
    );
};
