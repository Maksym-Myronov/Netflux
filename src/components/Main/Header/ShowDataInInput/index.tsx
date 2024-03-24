import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from '../index.module.scss';

interface Props {
	handleAddIdToFunction: (id: number) => void;
	posterPath: string;
	id: number;
	title: string;
	releaseDate: string;
}

export const ShowDataInInput: React.FC<Props> = ({
	handleAddIdToFunction,
	posterPath,
	id,
	title,
	releaseDate
}) => {
	const IMAGE_PATH_URL: string = 'https://image.tmdb.org/t/p/w500';

	return (
		<div>
			<Link to="/watchTrailer" onClick={() => handleAddIdToFunction(id)}>
				<div className={styles.header__search}>
					<img
						src={`${IMAGE_PATH_URL}${posterPath}`}
						alt="poster"
						style={{
							width: '50px',
							height: '70px'
						}}
					/>
					<div>
						<li className={styles.header__title}>{title.slice(0, 20)}</li>
						<span className={styles.header__search__span}>
							{releaseDate.slice(0, 4)}
						</span>
						<p className={styles.header__search__cost}>FOR FREE</p>
					</div>
				</div>
			</Link>
		</div>
	);
};
