import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slice/nameTrainer.slice";
import btnPreviousNext from "./slice/btnPreviousNext.slice";
import btnNext from "./slice/btnNext.slice";

export default configureStore({
  reducer: {
    nameTrainer,
    btnPreviousNext,
    btnNext,
  },
});
