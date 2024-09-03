import React, { useEffect } from "react";
import PropTypes from "prop-types";

import AppButton from "../AppButton";
import "./style.scss";

/**
 *
 * @param {Object} props
 * @param {Number} props.totalRecords
 * @param {Function} props.onChange
 * @returns React.JSX.Element
 */
const AppPagination = (props) => {
  const className = `app-pagination`;
  const pageLimit = 10;

  const [currentPage, setCurrentPage] = React.useState(1);

  const getTotalPages = () => {
    return Math.ceil(props.totalRecords / pageLimit);
  };
  const pages = [...Array(getTotalPages())];

  const changeCurrentPage = (pageNumber) => setCurrentPage(pageNumber);
  const gotoNextPage = () => setCurrentPage(currentPage + 1);
  const gotoPreviousPage = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    props.onChange(currentPage, pageLimit);
  }, [currentPage]);

  return (
    <div className={className}>
      <button
        className="navigation-btn"
        disabled={currentPage === 1}
        onClick={gotoPreviousPage}
      >
        Prev
      </button>
      {pages.map((_, index) => {
        return (
          <AppButton
            key={index}
            text={(index + 1).toString()}
            className={currentPage - 1 === index ? "active" : ""}
            onClick={() => changeCurrentPage(index + 1)}
          />
        );
      })}
      <button
        className="navigation-btn"
        disabled={currentPage === pages.length}
        onClick={gotoNextPage}
      >
        Next
      </button>
    </div>
  );
};

AppPagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  totalRecords: PropTypes.number,
};

AppPagination.defaultProps = {
  onChange: () => null,
  totalRecords: 0,
};
export default AppPagination;
