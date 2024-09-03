import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import MoviesList from "../Movies/MoviesList";
import AppPagination from "../AppPagination";

import "./style.scss";

const HomeScreen = () => {
  const moviesData = useSelector((state) => state.movies);
  const [data, setData] = React.useState([]);

  const getRecordsByPage = (currentPage, pageLimit) => {
    
    const startIndex = (currentPage - 1) * pageLimit;
    const endIndex = startIndex + pageLimit;
    const recordsOnPage = moviesData.movies.slice(startIndex, endIndex);
    setData(recordsOnPage);
    return recordsOnPage;
  };

  return (
    <div className="home-screen">
      <Navbar />
      <MoviesList data={data} />
      <AppPagination
        totalRecords={moviesData.movies.length}
        onChange={getRecordsByPage}
      />
    </div>
  );
};

export default HomeScreen;
