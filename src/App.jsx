import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Trainer from "./components/Trainer";
import PokeApp from "./components/PokeApp";
import PokemonFeatures from "./components/PokemonFeatures";

const App = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);

  return (
    <Routes>
      <Route path="/" element={<Trainer />} />
      <Route
        path="/pokemons"
        element={nameTrainer ? <PokeApp /> : <Trainer />}
      />
      <Route
        path="/pokemons/:pokemonId"
        element={nameTrainer ? <PokemonFeatures /> : <Trainer />}
      />
      <Route path="*" element={<Trainer />} />
    </Routes>
  );
};

export default App;
