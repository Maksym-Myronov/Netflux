import React from 'react';
import MovieMainCard from "./MovieMainCard";
// Styles
import styles from "../index.module.scss";

export const MainCard: React.FC = ({newValueOfListArray}) => {
    return (
        <div className={styles.slider__slider__block}>
            {newValueOfListArray && newValueOfListArray.map((item) => (
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
