import React from 'react';
import { Link } from 'react-router-dom';
// Images
import notFoundImage from '../../../../assets/images/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.webp';
// Styles
import styles from '../../Watchlist/index.module.scss';

interface ResultProps {
	id: number;
	title: string;
	posterPath: string;
	handleAddIdToFunction: (id: number) => void;
}

export const NewResults: React.FC<ResultProps> = ({
	id,
	title,
	posterPath,
	handleAddIdToFunction
}) => {
	const posterImage = posterPath
		? `https://image.tmdb.org/t/p/w500/${posterPath}`
		: notFoundImage;

	return (
		<div className={styles.watchlist__parent}>
			<div className={styles.watchlist__cards}>
				<div className={styles.watchlist__card}>
					<p className={styles.watchlist__movie__name}>
						{title.length > 17 ? `${title.slice(0, 15)}...` : title}
					</p>
					<div className={styles.watchlist__episode__count}>
						<p className={styles.watchlist__episode__name}>Rating</p>
						<p className={styles.watchlist__episode__name}>/10 stars</p>
					</div>
					<div className={styles.watchlist__episode__btn}>
						<Link to="/watchTrailer">
							<button
								className={styles.watchlist__watch}
								onClick={() => handleAddIdToFunction(id)}
							>
								Watch
							</button>
						</Link>
					</div>
				</div>
				<img
					src={posterImage}
					alt="rick"
					className={styles.watchlist__list__image}
				/>
			</div>
		</div>
	);
};
