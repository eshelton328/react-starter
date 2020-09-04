import React from 'react';
import MovieListEntry from './MovieListEntry';

var MovieList = (props) => (
  <div className='movie-list'>
    {props.movies.map(movie =>
      <MovieListEntry movie={movie}/>
    )}
  </div>
)

export default MovieList;