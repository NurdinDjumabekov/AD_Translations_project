import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preloader: false,
};
const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
  },
});
export const { changePreloader } = mainPageSlice.actions;

export default mainPageSlice.reducer;
