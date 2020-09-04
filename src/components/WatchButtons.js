import React from 'react'

var WatchButtons = (props) => (
  <div>
    <button onClick={() => props.toggleMovieList(false)}>
      Watched
    </button>
    <button onClick={() => props.toggleMovieList(true)}>
      To Watch
    </button>
  </div>

)

export default WatchButtons;