import React from 'react';
//Images
import oval from '../../../assets/images/Oval.svg'
import arrow from '../../../assets/images/arrow-left-b.svg'
//Styles
import styles from './index.module.scss'

const MainTrailer: React.FC = () => {
    return (
        <div className={styles.trailer}>
            <div className={styles.trailer__container}>
                <h1>WATCH</h1>
                <div className={styles.trailer__images}>
                    <img src={oval} alt="oval" className={styles.trailer__oval} />
                    <img src={arrow} alt="arrow" className={styles.trailer__arrow} />
                </div>
                <h1>TRAILER</h1>
            </div>
            <div className={styles.trailer__info}>
                <p className={styles.trailer__data}>Vivamus sit amet interdum elit</p>
                <h1 className={styles.trailer__movie}>Mancing Mania <br /> The Movie</h1>
                <p className={styles.trailer__data}>On the air  01 . 11 . 20</p>
            </div>
        </div>
    );
};

export default MainTrailer;