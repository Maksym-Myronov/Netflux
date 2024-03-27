import React from 'react';
import { AllGenres } from './AllGenres';
import { useAppSelector } from '../../../hooks/useStore';
import { useGetImage } from '../../../hooks/useGetImage';
// Styles
import styles from './index.module.scss';

export const SeeAllGenres: React.FC = () => {
	const genresList = useAppSelector((state) => state.genresId);
	const genresArray = genresList?.genresId?.genres;
	const [renderImage] = useGetImage();

	return (
		<div className={styles.genre}>
			{genresArray?.map((item: { id: number; name: string }) => (
				<div className={styles.genre__card} key={item.id}>
					<AllGenres id={item.id} name={item.name} renderImage={renderImage} />
				</div>
			))}
		</div>
	);
};
