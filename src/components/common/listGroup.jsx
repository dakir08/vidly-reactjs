import React from "react";

const ListGroup = props => {
  const {
    genres,
    textProperty,
    valueProperty,
    onGenresSelect,
    selectedGenre
  } = props;
  return (
    <React.Fragment>
      <ul className="list-group m-2">
        {genres.map(genre => (
          <li
            className={
              genre === selectedGenre || genre[valueProperty] === 1
                ? "list-group-item active"
                : "list-group-item"
            }
            key={genre[valueProperty]}
            onClick={() => onGenresSelect(genre)}
          >
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
