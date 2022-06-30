import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardPokemon from "./CardPokemon";
import useDataAxios from "../hook/useDataAxios";
import SearchFilter from "./SearchFilter";
import style from "./PokeApp.module.css";
import { decremenBtn, incremenBtn } from "../store/slice/btnPreviousNext.slice";
import Pagination from "./Pagination";

//URL de lista pokemon

const PokeApp = () => {
  //Variable global
  const nameTrainer = useSelector((state) => state.nameTrainer);
  const btnPreviousNext = useSelector((state) => state.btnPreviousNext);

  const URL = `https://pokeapi.co/api/v2/pokemon/?limit=24&offset=${btnPreviousNext}`;

  //custom hook para el llamado de la API
  const [data] = useDataAxios(URL);
  const [searchInput, setSearchInput] = useState("");

  //URL por nombre o ID del pesonaje pokemon
  const URLpokemon = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;

  //URL Data filter pokemon typo
  const [filterType] = useDataAxios("https://pokeapi.co/api/v2/type/");

  //Paginacion
  const dispatch = useDispatch();
  const btnNext = () => dispatch(incremenBtn());
  const btnPrevious = () => dispatch(decremenBtn());

  //Atras
  const navigate = useNavigate();
  const btnBack = () => navigate("/");

  return (
    <div>
      <header className={style.header}>
        <SearchFilter setSearchInput={setSearchInput} />
        <h1 className={style.titleApp}>
          Welcome to Poke APP <span>{nameTrainer}</span>
        </h1>
      </header>

      <button onClick={btnBack} className={style.btnBack}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <main className={style.main}>
        <Pagination
          btnNext={btnNext}
          btnPrevious={btnPrevious}
          btnPreviousNext={btnPreviousNext}
        />
        <div className={style.contentCard}>
          {searchInput === "" ? (
            data?.results.map((urlPokemon) => (
              <CardPokemon key={urlPokemon.url} urlPokemon={urlPokemon.url} />
            ))
          ) : (
            <CardPokemon key={URLpokemon} urlPokemon={URLpokemon} />
          )}
        </div>
        <Pagination
          btnNext={btnNext}
          btnPrevious={btnPrevious}
          btnPreviousNext={btnPreviousNext}
        />
      </main>
    </div>
  );
};

export default PokeApp;
