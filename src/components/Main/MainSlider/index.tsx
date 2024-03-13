import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieData} from "../../../store/moviesSlice.ts";
import {MainCard} from "./MainCard";
// Images
import logo from '../../../assets/images/PicturemovieSlider.svg'
import rightArrow from '../../../assets/images/right.svg'
import leftArrow from '../../../assets/images/left.svg'
// Styles
import styles from './index.module.scss'


export const MainSlider: React.FC   = () => {

    const states = useSelector((state) => state.movie)
    const newMoviesArray = states.list.results
    const newValueOfListArray = newMoviesArray && newMoviesArray.slice(0, 4)
    const dispatch = useDispatch()
    console.log(newMoviesArray)

    useEffect(() => {
        dispatch(fetchMovieData())
    }, [dispatch])

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
            <div >
                <MainCard
                    newValueOfListArray={newValueOfListArray}
                />
            </div>
        </div>
    );
};



