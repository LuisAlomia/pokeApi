import React from "react";
import { useState } from "react";
import style from "./SearchFilter.module.css";

const SearchFilter = ({ setSearchInput }) => {
  const [search, setSearch] = useState();

  const handleInput = (e) => {
    e.preventDefault();
    setSearchInput(search);
    setSearch("");
  };

  const changeInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleInput} className={style.form}>
      <input
        className={style.inputSearch}
        onChange={changeInput}
        name="inputSea"
        value={search}
        type="text"
        placeholder="Name or Id"
        autoComplete="off"
        autoFocus={true}
      />
      <button className={style.buttonSearch}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

export default SearchFilter;
