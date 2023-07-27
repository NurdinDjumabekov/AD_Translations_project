import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateNUR: "RCTVYBU",
};
const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    CHAGNEG: (state, action) => {
      state.stateNUR = action.payload;
    },
  },
});
export const { CHAGNEG } = mainPageSlice.actions;

export default mainPageSlice.reducer;
