import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    genres: [],
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

  componentDidMount() {
    const genres = [{ name: "All genres", _id: 0 }, ...getGenres()];
    this.setState({ genres });
  }

  handleGenreSelect = genre => {
    this.state.currentPage = 1;
    this.setState({ selectedGenre: genre });
  };
  render() {
    if (this.state.movies.length === 0)
      return <p>there are no movies in the database</p>;

    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            m => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;
    const movies = paginate(
      filtered,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={this.state.genres}
            selectedGenre={this.state.selectedGenre}
            onGenresSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p className="m-3">
            Showing {filtered.length} movies in the database
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like onFavorite={this.handleFavorite} movie={movie} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(movie._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            itemsCount={filtered.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
