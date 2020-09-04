import React from 'react';

var MovieListEntry = (props) => (
  <div className='movie-list-entry'>
    {props.movie.title}
    <button onClick={}>
      x
    </button>
  </div>
);

export default MovieListEntry;