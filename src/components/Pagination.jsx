import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ btnNext, btnPrevious, btnPreviousNext }) => {
  return (
    <div className={style.contentBtn}>
      {btnPreviousNext > 0 && <button onClick={btnPrevious}>Previous</button>}
      <button onClick={btnNext}>Next</button>
    </div>
  );
};

export default Pagination;
