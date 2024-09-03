import PropTypes from "prop-types";
import "./style.scss";

/**
 *
 * @param {Object} props
 * @param {String} props.title
 * @param {Number} props.publishYear
 * @param {Boolean} props.noRightMargin
 * @param {String} props.poster
 * @returns React.JSX.Element
 */
const MovieItem = (props) => {
  const className = `movie-item ${props.noRightMargin ? "mr-0" : ""}`;
  return (
    <div className={className}>
      <img className="movie-item--poster" src={props.poster} alt="no-poster" />
      <span className="movie-item--title">{props.title}</span>
      <span className="movie-item--publishYear">{props.publishYear}</span>
    </div>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  publishYear: PropTypes.number.isRequired,
  poster: PropTypes.string,
  noRightMargin: PropTypes.bool,
};

MovieItem.defaultProps = {
  publishYear: 2021,
  title: "click",
  poster: null,
  noRightMargin: false,
};
export default MovieItem;
