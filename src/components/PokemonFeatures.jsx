import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useDataAxios from "../hook/useDataAxios";
import style from "./PokemonFeatures.module.css";

const PokemonFeatures = () => {
  const { pokemonId } = useParams();
  const URLpokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const [pokemon] = useDataAxios(URLpokemon);

  //Ir Atras
  const navigate = useNavigate();
  const btnBack = () => navigate("/pokemons");

  /* const Previous = () => {};
  const Next = () => {}; */

  return (
    <div>
      <button className={style.btnBack} onClick={btnBack}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      {pokemon && (
        <>
          <div className={style.card}>
            <div
              className={`${style.cardContent} ${pokemon.types[0].type.name}`}
            >
              <h2 className={style.cardTitle}>{pokemon.name}</h2>
              <div className={style.abilitys}>
                <div className={style.abilitysGroup}>
                  <h3>Core Skills</h3>
                  <div className={style.abilitysType}>
                    <p>{pokemon.abilities[0].ability.name}</p>
                    <p>{pokemon.abilities[1]?.ability.name}</p>
                  </div>
                </div>
                <div className={style.abilitysGroup}>
                  <h3>Pokemon Type</h3>
                  <div className={style.abilitysType}>
                    <p>{pokemon.types[0].type.name}</p>
                    <p>{pokemon.types[1]?.type.name}</p>
                  </div>
                </div>
              </div>
              <div className={style.cardImg}>
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                />
                {/* <div>
                  <button onClick={Previous}>
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                  </button>

                  <button onClick={Next}>
                    <span className="material-symbols-outlined">
                      arrow_Forward
                    </span>
                  </button>
                </div> */}
              </div>
              <div className={style.atributesGroup}>
                <h3>Attributes</h3>
                <div className={style.atributes}>
                  <p>
                    <span>Weight:</span> {pokemon.weight}
                  </p>
                  <p>
                    <span>Height: </span>
                    {pokemon.height}
                  </p>
                  <p>
                    <span>HP:</span> {pokemon.stats[0].base_stat}
                  </p>
                  <p>
                    <span>Attack:</span> {pokemon.stats[1].base_stat}
                  </p>
                  <p>
                    <span>Defense:</span> {pokemon.stats[2].base_stat}
                  </p>
                  <p>
                    <span>Special-Attack:</span> {pokemon.stats[3].base_stat}
                  </p>
                  <p>
                    <span>Special-Defense:</span> {pokemon.stats[4].base_stat}
                  </p>
                  <p>
                    <span>Speed:</span> {pokemon.stats[5].base_stat}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonFeatures;
