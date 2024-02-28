import React from 'react';
import Header from "./Header";
import MainTrailer from "./MainTrailer";
//Styles
import styles from './index.module.scss'
import SliderCards from "./SliderCard";

const PhotoHeader: React.FC = () => {
    return (
        <div className={styles.photo}>
            <Header />
            <MainTrailer />
            <SliderCards />
        </div>
    );
};

export default PhotoHeader;