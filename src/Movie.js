import React from 'react';
import LineEllipses from 'react-lines-ellipsis';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ title, poster, genres, synopsis }) => {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => {
            return <MovieGenres genre={genre} key={index} />;
          })}
        </div>
        <div className="Movie__Synopsis">
          <LineEllipses
            text={synopsis}
            maxLine="3"
            ellipsis=" ..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

//////////////////////////////////////////////////

const MovieGenres = ({ genre }) => {
  return <span className="Movie__Genre">{genre} </span>;
};

MovieGenres.propTypes = {
  genre: PropTypes.string.isRequired
};

//////////////////////////////////////////////////

const MoviePoster = ({ poster, alt }) => {
  return <img src={poster} className="Movie__Poster" alt={alt} title={alt} />;
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Movie;
