import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    {
      label: "Title",
      path: "title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      key: "favorite",
      content: movie => (
        <Like onFavorite={this.props.onFavorite} movie={movie} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(movie._id)}
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onDelete, onFavorite, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        onDelete={onDelete}
        onFavorite={onFavorite}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
