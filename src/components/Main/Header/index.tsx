import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShowDataInInput } from './ShowDataInInput';
import { useInputData } from '../../../hooks/useInputData';
import { useIdFunction } from '../../../hooks/useIdFunction';
// Images
import searchImage from '../../../assets/images/Search....svg';
import filterImage from '../../../assets/images/Filter.svg';
// Styles
import styles from './index.module.scss';



export const Header: React.FC = () => {
    const [handleAddIdToFunction] = useIdFunction();
    const [onInputChange, sortedMoviesArray, text, searchMovie] = useInputData();

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
                                    .map((search) => (
                                        <ShowDataInInput
                                            key={search.id}
                                            id={search.id}
                                            posterPath={search.poster_path}
                                            title={search.title}
                                            releaseDate={search.release_date}
                                            handleAddIdToFunction={
                                                handleAddIdToFunction
                                            }
                                        />
                                    ))}
                                <Link to="/allRedults">
                                    <span
                                        className={
                                            styles.header__search__results
                                        }
                                    >
                                        ALL RESULTS
                                    </span>
                                </Link>
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
