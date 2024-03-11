import React from 'react';
// Images
import logo from '../../../assets/images/PicturemovieSlider.svg'
import rightArrow from '../../../assets/images/right.svg'
import leftArrow from '../../../assets/images/left.svg'
import lokiImage from '../../../assets/images/Pictureloki.svg'
import chernobyl from '../../../assets/images/PictureChernobyl.svg'
import rick from '../../../assets/images/Picturerick.svg'
// Styles
import styles from './index.module.scss'

export const MainSlider: React.FC   = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__container}>
                <div className={styles.slider__scroll}>
                    <h1 className={styles.slider__title}>The Crown</h1>
                    <div className={styles.slider__arrow__block}>
                        <button className={styles.slider__left__arrow}><img src={leftArrow} alt="leftArrow"/></button>
                        <button className={styles.slider__right__arrow}><img src={rightArrow} alt="rightArrow"/>
                        </button>
                    </div>
                    <div className={styles.slider__watch__btn}>
                        <button className={styles.slider__wathclist}>+ Watchlist</button>
                        <button className={styles.slider__watch}>Watch Now</button>
                    </div>
                </div>
                <img src={logo} alt="logo" className={styles.slider__images}/>
            </div>
            <h2 className={styles.slider__card__title}>Popular on Netflux</h2>
            <div className={styles.slider__slider__block}>
                <div>
                    <div className={styles.slider__card}>
                        <p className={styles.slider__movie__name}>Loki</p>
                        <div className={styles.slider__episode__count}>
                            <p className={styles.slider__episode__name}>6 Ep</p>
                            <p className={styles.slider__episode__name}>Superhero</p>
                        </div>
                        <div className={styles.slider__episode__btn}>
                            <button className={styles.slider__plus__btn}>+</button>
                            <button className={styles.slider__wathc__btn}>Watch</button>
                        </div>
                    </div>
                    <img src={lokiImage} alt="lokiImage" className={styles.slider__list__image}/>
                </div>
                <div>
                    <div className={styles.slider__card}>
                        <p className={styles.slider__movie__name}>Chernobyl</p>
                        <div className={styles.slider__episode__count}>
                            <p className={styles.slider__episode__name}>5 Ep</p>
                            <p className={styles.slider__episode__name}>Mini Series</p>
                        </div>
                        <div className={styles.slider__episode__btn}>
                            <button className={styles.slider__plus__btn}>+</button>
                            <button className={styles.slider__wathc__btn}>Watch</button>
                        </div>
                    </div>
                    <img src={chernobyl} alt="chernobyl" className={styles.slider__list__image}/>
                </div>
                <div>
                    <div className={styles.slider__card}>
                        <p className={styles.slider__movie__name}>Rick and Morty</p>
                        <div className={styles.slider__episode__count}>
                            <p className={styles.slider__episode__name}>49 Ep</p>
                            <p className={styles.slider__episode__name}>Fantasy</p>
                        </div>
                        <div className={styles.slider__episode__btn}>
                            <button className={styles.slider__plus__btn}>+</button>
                            <button className={styles.slider__wathc__btn}>Watch</button>
                        </div>
                    </div>
                    <img src={rick} alt="rick" className={styles.slider__list__image}/>
                </div>
                <div>
                    <div className={styles.slider__card}>
                        <p className={styles.slider__movie__name}>Loki</p>
                        <div className={styles.slider__episode__count}>
                            <p className={styles.slider__episode__name}>6 Ep</p>
                            <p className={styles.slider__episode__name}>Superhero</p>
                        </div>
                        <div className={styles.slider__episode__btn}>
                            <button className={styles.slider__plus__btn}>+</button>
                            <button className={styles.slider__wathc__btn}>Watch</button>
                        </div>
                    </div>
                    <img src={lokiImage} alt="lokiImage" className={styles.slider__list__image}/>
                </div>
            </div>
        </div>
    );
};



