import React from 'react';
import {Link} from "react-router-dom";
//Images
import logo from "../../../assets/images/Luxi-Fashion-Logo.svg";
import settings from "../../../assets/images/Shape.svg";
import errorImage from '../../../assets/images/Group 2.svg'
import facebookImage from '../../../assets/images/Group 9.svg'
import linkedInImage from '../../../assets/images/Group 9 Copy.svg'
import twitterImage from '../../../assets/images/Group 9 Copy 2.svg'
import instagramImage from '../../../assets/images/Group 9 Copy 3.svg'
import earth from '../../../assets/images/android-globe.svg'
//Styles
import styles from "./index.module.scss";

const NotFound: React.FC = () => {
    return (
        <div className={styles.error}>
            <div className={styles.error__container}>
                <div className={styles.error__links}>
                    <img src={logo} alt="logo" className={styles.error__logo}/>
                    <button className={styles.error__featured}>Featured</button>
                    <ul className={styles.error__list}>
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
                <div className={styles.error__info}>
                    <button className={styles.error__login}>LOGIN</button>
                    <button className={styles.error__regist}>REGISTER</button>
                    <img src={settings} alt="settings" className={styles.error__settings}/>
                </div>
            </div>
            <div className={styles.error__text}>
                <div className={styles.error__information}>
                    <img src={errorImage} alt="404" className={styles.error__images}/>
                    <h1 className={styles.error__code}>404</h1>
                </div>
                <div className={styles.error__block}>
                    <h1 className={styles.error__message}>This page could not be found</h1>
                    <p className={styles.error__solution}>You can either stay and chill here, or<br /> go back to the beginning.</p>
                    <Link to="/">
                        <button className={styles.error__button}>BACK TO HOME</button>
                    </Link>
                </div>
            </div>
            <footer className={styles.footer}>
                <div>
                    <img src={logo} alt="logo" className={styles.footer__logo}/>
                    <h1 className={styles.footer__video}>Video</h1>
                    <p className={styles.footer__theme}>© Luxi Theme 2020</p>
                </div>
                <div>
                    <h1 className={styles.footer__navigation}>COMPANY</h1>
                    <p>Donec dignissim</p>
                    <p>Curabitur egestas</p>
                    <p>Nam posuere</p>
                    <p>Aenean facilisis</p>
                </div>
                <div>
                    <h1 className={styles.footer__navigation}>Services</h1>
                    <p>Cras convallis</p>
                    <p>Vestibulum faucibus</p>
                    <p>Quisque lacinia purus</p>
                    <p>Aliquam nec ex</p>
                </div>
                <div>
                    <h1 className={styles.footer__navigation}>Legal</h1>
                    <p>Suspendisse porttitor</p>
                    <p>Nam posuere</p>
                    <p>Curabitur egestas</p>
                </div>
                <div>
                    <div>
                        <img src={facebookImage} alt="facebookImage" className={styles.footer__social__media} />
                        <img src={linkedInImage} alt="linkedInImage" className={styles.footer__social__media} />
                        <img src={twitterImage} alt="twitterImage" className={styles.footer__social__media} />
                        <img src={instagramImage} alt="instagramImage" className={styles.footer__social__media} />
                    </div>
                    <div className={styles.footer__languege}>
                        <img src={earth} alt="earth" className={styles.footer__image}></img>
                        <select>
                            <option>English - En</option>
                        </select>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NotFound;