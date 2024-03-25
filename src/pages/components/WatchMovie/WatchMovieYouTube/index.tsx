import React from 'react';
// Styles
import styles from '../index.module.scss';

export const WatchMovieYouTube: React.FC = () => {
	return (
		<div className={styles.watch__movie}>
			<div>
				<h1 className={styles.watch__movie__error}>
					Sorry, but at the moment we can't show you the trailer because it's
					unavailable.
				</h1>
			</div>
		</div>
	);
};
