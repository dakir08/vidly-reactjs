import React from "react";

const likeHeart = props => {
  let classes = "fa fa-heart"; // -o
  if (props.movie.liked !== true) classes += "-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      onClick={() => props.onFavorite(props.movie)}
    />
  );
};

export default likeHeart;
