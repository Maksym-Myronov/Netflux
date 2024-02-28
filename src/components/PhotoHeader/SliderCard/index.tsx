import React from 'react';
//Images
import rightArrow from '../../../assets/images/icons8-forward-50.png'
import leftArrow from '../../../assets/images/icons8-arrow-50.png'
import star from '../../../assets/images/icons8-star-26.png'
import movieLogo from '../../../assets/images/gran-turismo.jfif'
//Styles
import styles from './index.module.scss'

const SliderCards: React.FC = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__container}>
                <img src={leftArrow} alt="leftArrow" className={styles.slider__arrow} />
                <div className={styles.slider__block}>
                    <div>
                        <p className={styles.slider__text}>Vivamus sit amet</p>
                        <h1 className={styles.slider__description}>The Lorem Ipsum<br /> Dolor Sit Amet</h1>
                        <div className={styles.slider__mark}>
                            <img src={star} alt="alt"  />
                            <p>5.0</p>
                            <p>2h 13m</p>
                        </div>
                        <p className={styles.slider__text}>Vestibulum faucibus eget erat eget<br />pretium.Donec commodo convallis eget <br /> suscipit orci.</p>
                        <div className={styles.slider__button}>
                            <button className={styles.slider__trailer}>WATCH TRAILER</button>
                            <button className={styles.slider__movies}>WATCH FULL MOVIE</button>
                        </div>
                    </div>
                    <div>
                        <img src={movieLogo} alt="movieLogo" className={styles.slider__movie__logo} />
                    </div>
                </div>
                <img src={rightArrow} alt="leftArrow" className={styles.slider__arrow} />
            </div>
        </div>
    );
};

export default SliderCards;