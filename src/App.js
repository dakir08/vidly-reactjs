import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleDelete = movieId => {
    const movies = this.state.movies.filter(movie => movie._id !== movieId);
    this.setState({ movies });
  };

  handleFavorite = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = movies[index].liked === true ? false : true;
    this.setState({ movies });
    console.log("FAVORITE CLICKED", movies[index]);
  };
  render() {
    return (
      <main className="container">
        <Movies
          movies={this.state.movies}
          onDelete={this.handleDelete}
          onFavorite={this.handleFavorite}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
      </main>
    );
  }
}

export default App;
