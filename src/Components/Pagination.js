import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="container">
        <div className="pagination">
          <ul className="dotList">
            <li className="dot active"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
          </ul>
        </div>
        <div className="paginatorContainer">
          <span className="iconButton">
            <img
              width="48"
              height="48"
              src="https://www.volvocars.com/static/shared/icons/v1.1/media-previous-48.svg#light-secondary"
              role="presentation"
              alt=""
              className="circle"
            />{" "}
          </span>
          <span className="iconButton">
            <img
              width="48"
              height="48"
              src="https://www.volvocars.com/static/shared/icons/v1.1/media-next-48.svg#light-primary"
              role="presentation"
              alt=""
              className="circle"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Pagination;
