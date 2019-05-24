import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  render() {
    if (this.props.movies.length === 0)
      return <p>there are no movies in the database</p>;
    const movies = paginate(
      this.props.movies,
      this.props.currentPage,
      this.props.pageSize
    );
    return (
      <div>
        <p className="m-3">
          Showing {this.props.movies.length} movies in the database
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
                  <Like onFavorite={this.props.onFavorite} movie={movie} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.onDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          itemsCount={this.props.movies.length}
          pageSize={this.props.pageSize}
          onPageChange={this.props.handlePageChange}
          currentPage={this.props.currentPage}
        />
      </div>
    );
  }
}

export default Movies;
