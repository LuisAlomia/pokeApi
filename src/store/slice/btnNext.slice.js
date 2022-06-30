import { createSlice } from "@reduxjs/toolkit";

export const btnNextSlice = createSlice({
  name: "btnNext",
  initialState: 0,
  reducers: {
    incremenBtnNext: (state) => state + 1,
    decremenBtnNext: (state) => state - 1,
    setBtnNext: (state, action) => action.payload,
  },
});

export const { incremenBtnNext, decremenBtnNext, setBtnNext } =
  btnNextSlice.actions;

export default btnNextSlice.reducer;
