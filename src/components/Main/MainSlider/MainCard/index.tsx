import React from 'react';
import MovieMainCard from './MovieMainCard';
// Styles
import styles from '../index.module.scss';

interface Movie {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
}

interface ArrayProps {
	newValueOfListArray: Movie[];
}

export const MainCard: React.FC<ArrayProps> = ({ newValueOfListArray }) => {
	return (
		<div className={styles.slider__slider__block}>
			{newValueOfListArray &&
				newValueOfListArray.map((item) => (
					<MovieMainCard
						key={item.id}
						id={item.id}
						title={item.title}
						poster_path={item.poster_path}
						voteAverage={item.vote_average}
					/>
				))}
		</div>
	);
};
