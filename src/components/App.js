import React from 'react';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js'
import Search from './Search.js'
import WatchButtons from './WatchButtons.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieList: [],
      toWatch: [],
      watched: []
    };
  }

  toggleMovieList(toggle) {
    if(toggle) {
      this.setState({
        movieList: this.state.watched
      })
    } else {
      this.setState({
        movieList: this.state.toWatch
      })
    }
  }

  addToWatched() {

  }

  addMovieTitle(addInput) {
    console.log(addInput);
    var movieArray = [...this.state.movies, addInput];
    this.setState({
      movieList: movieArray,
      movies: movieArray,
      watched: movieArray
    }, () => console.log(this.state));
  }

  searchMovies(searchInput) {
    var movieArray = this.state.movies;
    console.log('searching movies');

    if (searchInput === null || searchInput.match(/^ *$/) !== null) {
      this.setState({
        movieList: movieArray
      })
    } else {
      var searchResults = [];
      var target = searchInput.toLowerCase();
      var isInList = false;

      for (var i = 0; i < movieArray.length; i++) {
        var movie = movieArray[i].title.toLowerCase();

        if (movie.includes(target)) {
          isInList = true;
          searchResults.push(movieArray[i]);
        }
      }

      if (!isInList) {
        console.log('Err: movie not found');
      } else {
        this.setState({
          movieList: searchResults
        })
      }

    }
  }

  render(){
    return(
      <div className='container'>
        <div className='header'>
          <h3>Movie List</h3>
        </div>
        <div>
          <WatchButtons toggleMovieList={this.toggleMovieList.bind(this)} />
        </div>
        <div className='add'>
          <AddMovie handleAddInput={this.addMovieTitle.bind(this)} />
        </div>
        <div className='search'>
          <Search handleSearchInput={this.searchMovies.bind(this)} />
        </div>
        <div className='list'>
          <MovieList movies={this.state.movieList} addToWatched={this.addToWatched}/>
        </div>
      </div>
    );
  }
}

export default App;
