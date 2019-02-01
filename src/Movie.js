import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
  }
  render() {
      return(
        <div>
          <h1> {this.props.title} </h1>
          <MoviePoster poster={this.props.poster}/>
        </div>
      );
  }
}

class MoviePoster extends Component {

  static propType = {
    poster: PropTypes.string.isRequired
  }

  render(){
    return(
      <img src={ this.props.poster } />
    )
  }
}

export default Movie;
