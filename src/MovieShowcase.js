import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = props => {
    // map over your movieData array and return the correct
    // const generateMovieCards = props.MovieCard
    return movieData.map(movieData => (
      <MovieCard
        title={movieData.title}
        genres={movieData.genres}
        poster={movieData.poster}
        IMDBRating={movieData.IMDBRating}
      />
    ));
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
