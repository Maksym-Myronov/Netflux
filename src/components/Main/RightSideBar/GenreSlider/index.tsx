import React from 'react';
import styles from '../index.module.scss';
import { fetchGenresMovies } from '../../../../store/genresSlice';
import { useAppDispatch } from '../../../../hooks/useStore';

interface GenreProps {
	name: string;
	id: number;
	renderImage: (value: string) => string;
}

export const GenreSlider: React.FC<GenreProps> = ({
	name,
	id,
	renderImage
}) => {
	const dispatch = useAppDispatch();
	const handleCheckId = (valueId: number) => {
		dispatch(fetchGenresMovies(valueId));
	};

	return (
		<div>
			<div
				onClick={() => handleCheckId(id)}
				className={styles.menu__categories__sitcom}
			>
				<img src={renderImage(name)} alt="as" className={styles.images} />
				<h1 className={styles.menu__categories__title}>{name}</h1>
			</div>
		</div>
	);
};
