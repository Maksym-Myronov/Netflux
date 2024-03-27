import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/useStore';
import { fetchGenresMovies } from '../../../../store/genresSlice';
// Styles
import styles from '../index.module.scss';

interface GenresProps {
	id: number;
	name: string;
	renderImage: (genresImage: string) => string;
}

export const AllGenres: React.FC<GenresProps> = ({ id, name, renderImage }) => {
	const dispatch = useAppDispatch();
	const handleCheckId = (valueId: number) => {
		dispatch(fetchGenresMovies(valueId));
	};

	return (
		<div className={styles.genre__block}>
			<Link
				to="/sitcom"
				className={styles.genre__link}
				onClick={() => handleCheckId(id)}
			>
				<img
					src={renderImage(name)}
					alt="images"
					className={styles.genre__image}
				/>
				<h1 className={styles.genre__title}>{name}</h1>
			</Link>
		</div>
	);
};
