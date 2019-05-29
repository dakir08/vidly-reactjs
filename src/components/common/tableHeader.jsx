import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.sortOrder = sortColumn.sortOrder === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.sortOrder = "asc";
      console.log("TRIGGERED");
    }
    this.props.onSort(sortColumn);
    console.log(sortColumn.sortOrder);
  };
  renderSortIcon = column => {
    if (this.props.sortColumn.path !== column.path) return null;
    if (this.props.sortColumn.sortOrder === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true" />;
    return <i className="fa fa-sort-desc" aria-hidden="true" />;
  };
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr className="animatedHeader">
          {columns.map(column => (
            <th
              onClick={() => this.raiseSort(column.path)}
              key={column.path || column.key}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
