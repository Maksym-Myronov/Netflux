import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { fetchGenresId } from '../../../store/genresIdSlice';
// Images
import bell from '../../../assets/images/Notification.svg';
import iconLogo from '../../../assets/images/Profile Picture.svg';
import leftArrow from '../../../assets/images/left.svg';
import rightArrow from '../../../assets/images/right.svg';
import lineImage from '../../../assets/images/Progress.svg';
import movieImage from '../../../assets/images/Picture.svg';
// Styles
import styles from './index.module.scss';
import { fetchGenresMovies } from '../../../store/genresSlice';

export const RightSideBar: React.FC = () => {
	const { user, isAuthenticated } = useAuth0();
	const genresList = useAppSelector((state) => state.genres);
	const genresId = useAppSelector((state) => state.genresId);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchGenresMovies());
		dispatch(fetchGenresId());
	}, [dispatch]);
	const genresImages = genresId?.genresId?.genres?.map((item) => item.name);

	const userName: string =
		user && user.given_name
			? JSON.stringify(user.given_name).replace(/"/g, '')
			: '';

	return (
		<div className={styles.menu}>
			<div className={styles.menu__profile}>
				<img src={bell} alt="bell" />
				<p className={styles.menu__name}>
					{isAuthenticated && user ? `Welcome back ${userName} !` : null}
				</p>
				<img src={iconLogo} alt="iconLogo" />
			</div>
			<div className={styles.menu__continue}>
				<p className={styles.menu__continue__text}>Continue</p>
				<button className={styles.menu__button}>
					<img src={leftArrow} alt="leftArrow" />
				</button>
				<button className={styles.menu__button}>
					<img src={rightArrow} alt="rightArrow" />
				</button>
				<div className={styles.menu__slider}>
					<p className={styles.menu__see__more}>See More</p>
					<button className={styles.menu__button}>
						<img src={rightArrow} alt="rightArrow" />
					</button>
				</div>
			</div>
			<div className={styles.menu__movies}>
				<div className={styles.menu__episode}>
					<div>
						<img src={movieImage} alt="movieImage" />
					</div>
					<div>
						<p>WandaVision</p>
						<p className={styles.menu__episode__text}>1 Episode left</p>
						<img src={lineImage} alt="lineImage" />
					</div>
				</div>
				<div className={styles.menu__block__button}>
					<button className={styles.menu__drop__btn}>Drop</button>
					<button className={styles.menu__watch__btn}>Watch</button>
				</div>
			</div>
			<div className={styles.menu__continue}>
				<p className={styles.menu__continue__text}>Top Rated</p>
				<button className={styles.menu__button}>
					<img src={leftArrow} alt="leftArrow" />
				</button>
				<button className={styles.menu__button}>
					<img src={rightArrow} alt="rightArrow" />
				</button>
				<div className={styles.menu__slider}>
					<p className={styles.menu__see__more}>See More</p>
					<button className={styles.menu__button}>
						<img src={rightArrow} alt="rightArrow" />
					</button>
				</div>
			</div>
			<div className={styles.menu__movies__top}>
				<div>
					<div>
						<p>Supernatural</p>
					</div>
					<div className={styles.menu__top__rated}>
						<p>320 Ep</p>
						<p className={styles.menu__top__text}>Horror, Fantasy</p>
					</div>
				</div>
				<div className={styles.menu__block__button}>
					<button className={styles.menu__top__btn}>+</button>
					<button className={styles.menu__watch__btn}>Watch</button>
				</div>
			</div>
			<div className={styles.menu__continue}>
				<p className={styles.menu__continue__text}>Genres</p>
				<button className={styles.menu__button}>
					<img src={leftArrow} alt="leftArrow" />
				</button>
				<button className={styles.menu__button}>
					<img src={rightArrow} alt="rightArrow" />
				</button>
				<div className={styles.menu__slider}>
					<p className={styles.menu__see__more}>See More</p>
					<button className={styles.menu__button}>
						<img src={rightArrow} alt="rightArrow" />
					</button>
				</div>
			</div>
			<div className={styles.menu__list}>
				<div className={styles.menu__categories}>
					<p>Drama</p>
				</div>
				<div className={styles.menu__categories__thriller}>
					<p>Thriller</p>
				</div>
			</div>
			<div className={styles.menu__list}>
				<Link to="sitcom">
					<div className={styles.menu__categories__sitcom}>
						<p>Sitcom</p>
					</div>
				</Link>
				<div className={styles.menu__categories__superhero}>
					<p>Superhero</p>
				</div>
			</div>
		</div>
	);
};
