import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNameTrainer } from "../store/slice/nameTrainer.slice";
import { useNavigate } from "react-router-dom";
import img from "../img/2.jpg";
import style from "./Trainer.module.css";

const Trainer = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    dispatch(setNameTrainer(e.target.input.value));
    navigate("/pokemons");
    setName("");
  };

  return (
    <div className={style.content}>
      <div className={style.contentCard}>
        <div className={style.image}>
          <img src={img} alt="imagen pokemon" />
        </div>
        <div className={style.contentImput}>
          <p>Bienvenido entrenador</p>
          <form onSubmit={handleInput}>
            <div>
              <label htmlFor="input">Ingresa tu nombre</label>
              <input
                className={style.input}
                name="input"
                value={name}
                autoComplete="off"
                id="input"
                type="text"
                placeholder="Name"
                autoFocus={true}
              />
            </div>
            <button className={style.button}>Iniciar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
