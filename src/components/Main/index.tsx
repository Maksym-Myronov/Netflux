import React from 'react';
import { Header } from "./Header";
// Images

// Styles
import styles from './index.module.scss'
import {MainSlider} from "./MainSlider";


export const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <div>
                <Header />
            </div>
            <div>
                <MainSlider />
            </div>
        </div>
    );
};
