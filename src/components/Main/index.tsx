import React from 'react';
import { Header } from './Header';
import { MainSlider } from './MainSlider';
// Styles
import styles from './index.module.scss';

export const Main: React.FC = () => {
	return (
		<div className={styles.main}>
			<div>
				<Header />
			</div>
			<div>
				<MainSlider />
			</div>
		</div>
	);
};
