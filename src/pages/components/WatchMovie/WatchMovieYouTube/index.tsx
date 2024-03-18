import React from 'react';

export const WatchMovieYouTube: React.FC = ({ key, title, posterPath}) => {

    const IMAGE_PATH_URL: string = 'https://image.tmdb.org/t/p/w500/';
    console.log(posterPath);

    return (
        <div>
            <img src={`${IMAGE_PATH_URL}${posterPath}`} alt="poster_path" style={{width: '100px', height: "100px"}} />
        </div>
    );
};
