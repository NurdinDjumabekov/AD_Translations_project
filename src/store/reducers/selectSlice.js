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
  idEverySelect: {
    services: 1,
    industries: 1,
    fromLang: 1,
    toLang: 2,
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
      state.choiceLang = { ...state.choiceLang, ...action.payload };
    },
    changeidEverySelect: (state, action) => {
      state.idEverySelect = { ...state.idEverySelect, ...action.payload };
    },
    clearIdEverySelect: (state) => {
      state.idEverySelect = {
        services: 1,
        industries: 1,
        fromLang: 1,
        toLang: 2,
      };
    },
  },
});
export const {
  changeSelect,
  changeChoiceLang,
  changeidEverySelect,
  clearIdEverySelect,
} = selectSlice.actions;

export default selectSlice.reducer;
