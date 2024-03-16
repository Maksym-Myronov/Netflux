import React from 'react';

export const Pagination: React.FC = ({moviesPerPage, totalMovies}) => {
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a href="#">{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
