import React from 'react';
import { Link } from 'react-router-dom';
import { useIdFunction } from '../../../../hooks/useIdFunction';
// Styles
import styles from '../../Watchlist/index.module.scss';

interface MovieData {
	id: number;
	title: string;
	posterPath: string;
	rating: number;
}

export const TopRatedCards: React.FC<MovieData> = ({
	title,
	rating,
	posterPath,
	id
}) => {
	const [handleAddIdToFunction] = useIdFunction();

	return (
		<div className={styles.watchlist__parent}>
			<div className={styles.watchlist__cards}>
				<div className={styles.watchlist__card}>
					<p className={styles.watchlist__movie__name}>
						{title.length > 17 ? `${title.slice(0, 15)}...` : title}
					</p>
					<div className={styles.watchlist__episode__count}>
						<p className={styles.watchlist__episode__name}>Rating</p>
						<p className={styles.watchlist__episode__name}>
							{Math.ceil(rating)}/10 stars
						</p>
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
					src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
					alt="rick"
					className={styles.watchlist__list__image}
				/>
			</div>
		</div>
	);
};
