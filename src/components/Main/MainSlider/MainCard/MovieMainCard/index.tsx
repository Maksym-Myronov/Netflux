import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../../hooks/useStore';
import { updateMovies } from '../../../../../store/watchListSlice';
import { useIdFunction } from '../../../../../hooks/useIdFunction';
// Styles
import styles from '../../index.module.scss';

interface Card {
	id: number;
	title: string;
	poster_path: string;
	voteAverage: number;
}

const MovieMainCard: React.FC<Card> = ({
	id,
	title,
	poster_path,
	voteAverage
}) => {
	const dispatch = useAppDispatch();
	const [handleAddIdToFunction] = useIdFunction();

	const handleAddMoviesToWatchlist = () => {
		dispatch(updateMovies([{ id, title, poster_path, voteAverage }]));
	};

	const ratingVote = voteAverage?.toString()?.slice(0, 3);

	const IMAGE_PATH_URL: string = 'https://image.tmdb.org/t/p/w500/';

	return (
		<div className={styles.slider__cards}>
			<div className={styles.slider__list}>
				<img
					src={`${IMAGE_PATH_URL}${poster_path}`}
					alt="rick"
					className={styles.slider__list__image}
				/>
				<div className={styles.slider__list__title}>
					<h1 className={styles.slider__list__name}>{title}</h1>
					<p className={styles.slider__list__vote}>{ratingVote}</p>
				</div>
				<div className={styles.slider__list__button}>
					<button
						className={styles.slider__list__plus}
						onClick={handleAddMoviesToWatchlist}
					>
						+
					</button>
					<Link to="watchTrailer">
						<button
							className={styles.slider__list__watch}
							onClick={() => handleAddIdToFunction(id)}
						>
							Watch
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MovieMainCard;
