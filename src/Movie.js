import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres, id}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h1 className="movie__title">{title}</h1>
            <h5 className="movie__year">{year}</h5>
            <ul className='movie__genres'>
                {genres.map(genre => {
                    return <li key={id} calssName='movie__genre'>{genre}</li>
                })}
            </ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
    </div>
    );

}

Movie.prototype = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;