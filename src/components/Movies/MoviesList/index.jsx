import React from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

import "./style.scss";

/**
 * @param {Object} props
 * @param {Array} props.data
 * @returns
 */
const MoviesList = ({ data }) => {
  return (
    <div className="movies-list">
      {data.length > 0 &&
        data?.map((item, index) => {
          return (
            <MovieItem
              key={index}
              noRightMargin={(index + 1) % 4 === 0}
              poster={item.poster}
              publishYear={item.publishYear}
              title={item.title}
            />
          );
        })}
    </div>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      poster: PropTypes.string.isRequired,
      publishYear: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
