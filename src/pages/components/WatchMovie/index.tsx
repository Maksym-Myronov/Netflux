import React from 'react';
import YouTube from 'react-youtube';
import { useAppSelector } from '../../../hooks/useStore';
// Styles
import styles from './index.module.scss';

export const WatchMovie: React.FC = () => {
    const movies = useAppSelector((state) => state.trailer);
    const findTrailer = () => {
        const OfficialTrailer =
            movies &&
            movies.trailer &&
            movies.trailer.videos &&
            movies.trailer.videos.results;

        const opts = {
            height: '390',
            width: '1180',
        };
        console.log(movies);

        const firstTrailerInArray =
            movies &&
            movies.trailer &&
            movies.trailer.videos &&
            movies.trailer.videos.results &&
            movies.trailer.videos.results[0];

        const secondTrailerInArray =
            movies &&
            movies.trailer &&
            movies.trailer.videos &&
            movies.trailer.videos.results &&
            movies.trailer.videos.results[1];

        const titleName = movies && movies.trailer && movies.trailer.original_title === 'The Godfather' ? secondTrailerInArray : firstTrailerInArray;

        if (OfficialTrailer) {
            const trailer = movies.trailer.videos.results.find(
                (video) => video.name === 'Official Trailer'
            );

            if (trailer) {
                return <YouTube videoId={trailer.key} opts={opts} />;
            }
            return <YouTube videoId={titleName.key} opts={opts} />;
        }
        return null;
    };

    const IMAGE_PATH_URL: string = 'https://image.tmdb.org/t/p/w500';
    const imagePosterPath: string = movies && movies.trailer && movies.trailer.poster_path;
    const articleOverview: string = movies && movies.trailer && movies.trailer.overview;
    console.log(movies);
    return (
        <div className={styles.watch}>
            <div className={styles.watch__container}>
                <div>
                    <img
                        src={`${IMAGE_PATH_URL}${imagePosterPath}`}
                        alt="poster_path"
                        className={styles.watch__image}
                    />
                </div>
                <div>
                    <h1 className={styles.watch__title}>{movies.trailer.title}</h1>
                    <article className={styles.watch__article}>{articleOverview}</article>
                </div>
            </div>
            <div className={styles.watch__youtube}>
                {movies && movies.trailer && movies.trailer.videos
                    ? findTrailer()
                    : null}
            </div>
        </div>
    );
};
