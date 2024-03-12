import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// Images
import homeImage from '../../../assets/images/Icon.svg';
import discoverImage from '../../../assets/images/Discover.svg';
import awardsImage from '../../../assets/images/Award.svg';
import celebritiesImage from '../../../assets/images/Celebrities.svg';
import recentImage from '../../../assets/images/Recent.svg';
import topRatedImage from '../../../assets/images/Top Rated.svg';
import downloadedImage from '../../../assets/images/Downloaded.svg';
import playlistsImage from '../../../assets/images/Playlists.svg';
import watchlistImage from '../../../assets/images/Watchlist.svg';
import completedImage from '../../../assets/images/Completed.svg';
import settingsImage from '../../../assets/images/Settings.svg';
import logOutImage from '../../../assets/images/Log Out.svg';
// Styles
import styles from './index.module.scss'

export const SideBar: React.FC = () => {

    const {loginWithRedirect, isAuthenticated, logout} = useAuth0()

    return (
        <div className={styles.menu}>
            <div>
                <h1 className={styles.menu__title}>Netflux</h1>
            </div>
            <div>
                <div className={styles.menu__list__items}>
                    <p className={styles.menu__category}>Menu</p>
                    <div className={styles.menu__block__category}>
                        <img src={homeImage} alt="homeImage" className={styles.menu__images}/>
                        <p>Home</p>
                    </div>
                    <div className={styles.menu__block__category}>
                        <img src={discoverImage} alt="discoverImage" className={styles.menu__images}/>
                        <p>Discover</p>
                    </div>
                    <div className={styles.menu__block__category}>
                        <img src={awardsImage} alt="awardsImage" className={styles.menu__images}/>
                        <p>Awards</p>
                    </div>
                    <div className={styles.menu__block__category}>
                        <img src={celebritiesImage} alt="celebritiesImage" className={styles.menu__images}/>
                        <p>Celebrities</p>
                    </div>
                </div>
                <div className={styles.menu__list__items}>
                    <p className={styles.menu__category}>Library</p>
                    <div className={styles.menu__block__category}>
                        <img src={recentImage} alt="recentImage" className={styles.menu__images}/>
                        <p>Recent</p>
                    </div>
                    <div className={styles.menu__block__category}>
                        <img src={topRatedImage} alt="topRatedImage" className={styles.menu__images}/>
                        <p>Top Rated</p>
                    </div>
                    <div className={styles.menu__block__category}>
                        <img src={downloadedImage} alt="downloadedImage" className={styles.menu__images}/>
                        <p>Downloaded</p>
                    </div>
                    <div className={styles.menu__block__category}>
                        <img src={playlistsImage} alt="playlistsImage" className={styles.menu__images}/>
                        <p>Playlists</p>
                    </div>
                    <div className={styles.menu__block__category}>
                        <img src={watchlistImage} alt="watchlistImage" className={styles.menu__images}/>
                        <p>Watchlist</p>
                    </div>
                    <div className={styles.menu__block__category}>
                        <img src={completedImage} alt="completedImage" className={styles.menu__images}/>
                        <p>Completed</p>
                    </div>
                </div>
                <div className={styles.menu__list__items__general}>
                    <p className={styles.menu__category}>General</p>
                    <div className={styles.menu__block__category}>
                        <img src={settingsImage} alt="settingsImage" className={styles.menu__images}/>
                        <p>Settings</p>
                    </div>
                    <div className={styles.menu__block__category}>
                        <img src={logOutImage} alt="logOutImage" className={styles.menu__images}/>
                        {!isAuthenticated ? (
                            <button onClick={() => loginWithRedirect()} className={styles.menu__button}>Sign In</button>
                        ) : (
                            <button onClick={() => logout()} className={styles.menu__button}>Log out</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};