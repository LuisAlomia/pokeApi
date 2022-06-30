import React from "react";
import useDataAxios from "../hook/useDataAxios";
import { useNavigate } from "react-router-dom";
import style from "./CardPokemon.module.css";

const CardPokemon = ({ urlPokemon }) => {
  const [pokemon] = useDataAxios(urlPokemon);
  const navigate = useNavigate();

  const clickCardPokemon = () => {
    navigate(`/pokemons/${pokemon.id}`);
  };

  return (
    <div onClick={clickCardPokemon}>
      {pokemon && (
        <div className={style.card}>
          <div className={style.cardLeftBox}></div>
          <div className={style.cardBottomBox}></div>
          <div
            className={`${style.cardPokebola} ${pokemon.types[0].type.name}`}
          >
            <div className={style.pokebolaLine}>
              <div className={style.pokebolaPunto}>
                <div className={style.pokebolaPuntoActive}></div>
              </div>
            </div>
          </div>
          <h2 className={style.cardInfoTitle}>{pokemon.name}</h2>
          <div className={style.cardInfo}>
            <p>Type</p>
            <h4 className={style.cardInfoSubtitle}>
              {pokemon.types[0].type.name}
            </h4>
            <h4 className={style.cardInfoSubtitle}>
              {pokemon.types[1]?.type.name}
            </h4>
          </div>
          <div className={style.cardImg}>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPokemon;
