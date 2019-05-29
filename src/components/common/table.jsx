import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, onSort, sortColumn, onDelete, onFavorite, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody
        data={data}
        columns={columns}
        onDelete={onDelete}
        onFavorite={onFavorite}
      />
    </table>
  );
};

export default Table;
