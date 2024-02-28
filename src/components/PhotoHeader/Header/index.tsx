import React from 'react';
import { Link } from "react-router-dom";
//Images
import logo from '../../../assets/images/Luxi-Fashion-Logo.svg'
import settings from '../../../assets/images/android-settings.svg'
//Styles
import styles from './index.module.scss'

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__links}>
                <img src={logo} alt="logo" className={styles.header__logo}/>
                <button className={styles.header__featured}>Featured</button>
                <ul className={styles.header__list}>
                    <Link to="/">
                        <li>Top Categories</li>
                    </Link>
                    <Link to="/">
                        <li>All Categories</li>
                    </Link>
                    <Link to="/">
                        <li>Pricing</li>
                    </Link>
                </ul>
            </div>
            <hr/>
            <div className={styles.header__info}>
                <button className={styles.header__login}>LOGIN</button>
                <button className={styles.header__regist}>REGISTER</button>
                <img src={settings} alt="settings" className={styles.header__settings}/>
            </div>
        </div>
    );
};

export default Header