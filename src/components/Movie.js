import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  // array propTypes
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className='movie'>
      <Link to={{ pathname: `/movie/${id}`, state: { id, year, title, summary, poster, genres } }}>
        <img src={poster} alt={title} title={title} />
        <div className='movie__data'>
          <h3 className='movie__title'>{title}</h3>
          <h5 className='movie__year'>{year}</h5>
          <p className='movie__summary'>{summary.slice(0, 140)}...</p>
          <ul className='generes'>
            {genres.map((genre, index) => (
              <li key={index} className='genres__genre'>
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
