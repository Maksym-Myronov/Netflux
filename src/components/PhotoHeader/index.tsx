import React from 'react';
import Header from "./Header";
//Styles
import styles from './index.module.scss'
import MainTrailer from "./MainTrailer";

const PhotoHeader: React.FC = () => {
    return (
        <div className={styles.photo}>
            <Header />
            <MainTrailer />
            {/*<MainTrailerInfo />*/}
        </div>
    );
};

export default PhotoHeader;