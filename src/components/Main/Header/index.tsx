import React from 'react';
import { Link } from 'react-router-dom';
// Images
import searchImage from '../../../assets/images/Search....svg';
import filterImage from '../../../assets/images/Filter.svg';
// Styles
import styles from './index.module.scss';

export const Header: React.FC = () => {
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
            <div className={styles.header__input__container}>
                <img
                    src={searchImage}
                    alt="searchImage"
                    className={styles.header__images}
                />
                <input placeholder="Search" className={styles.header__input} />
                <img
                    src={filterImage}
                    alt="filterImage"
                    className={styles.header__images}
                />
            </div>
        </div>
    );
};
