import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {


  state = {}

  componentDidMount(){
    this._getMovie();
  }

  _callApi = ()=> {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=ratin')
    .then(sucess => sucess.json())
    .then(json => json.data.movies)
    .catch(err =>  console.log(err))
  }

_getMovie = async ()=> {
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

_renderMovies = ()=> {
  const movies = this.state.movies.map((movie) => {
      return <Movie
        title={movie.title}
        poster={movie.small_cover_image}
        key={movie.id}
         />
    })
    return movies
}

  render() {
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
