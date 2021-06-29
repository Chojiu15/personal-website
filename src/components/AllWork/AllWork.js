import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./AllWork.module.css";
import ReactPaginate from "react-paginate";
import jsonData from "../../Data.json";

const AllWork = () => {
  const [data, setData] = useState(jsonData.data.slice(0, 50));
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 3;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const pagesVisited = currentPage * usersPerPage;

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      console.log(user.img);
      return (
        <div className={classes.Card} key={index + 1}>
          <img src={user.img}></img>
          <div className={classes.InsideMap}>
            <p>{user.description}</p>
            <a href={user.Website}>Live</a> <a href={user.GitHub}>Github</a>
            <Link to={`/allwork/${user.id}`}>More</Link>
          </div>
        </div>
      );
    });
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <React.Fragment>
      <div className={classes.AllWork}>
        <div className={classes.Container}>
          <div className={classes.Title}>
            <h1>All Work</h1>
          </div>
          <div className={classes.PresentedWork}>{displayUsers}</div>
          <div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={classes.paginationBttns}
              previousLinkClassName={classes.previousBttn}
              nextLinkClassName={classes.nextBttn}
              disabledClassName={classes.paginationDisabled}
              activeLinkClassName={classes.paginationActive}
              pageClassName={classes.pageClassName}
              pageLinkClassName={classes.pageLinkClassName}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AllWork;
