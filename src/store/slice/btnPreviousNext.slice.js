import { createSlice } from "@reduxjs/toolkit";

export const btnPreviousNextSlice = createSlice({
  name: "btnPreviousNext",
  initialState: 0,
  reducers: {
    incremenBtn: (state) => state + 24,
    decremenBtn: (state) => state - 24,
    setbtnPreviousNext: (state, action) => action.payload,
  },
});

export const { incremenBtn, decremenBtn, setbtnPreviousNext } =
  btnPreviousNextSlice.actions;

export default btnPreviousNextSlice.reducer;
