import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  select: {
    services: false,
    industries: false,
    fromLang: false,
    toLang: false,
  },
  choiceLang: {
    services: "",
    industries: "",
    fromLang: "",
    toLang: "",
  },
};

const selectSlice = createSlice({
  name: "selectSlice",
  initialState,
  reducers: {
    changeSelect: (state, action) => {
      state.select = action.payload;
    },
    changeChoiceLang: (state, action) => {
      state.choiceLang = action.payload;
    },
  },
});
export const { changeSelect, changeChoiceLang } = selectSlice.actions;

export default selectSlice.reducer;
