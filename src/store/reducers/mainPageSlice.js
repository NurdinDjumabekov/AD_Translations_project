import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const initialState = {
  preloader: false,
  dataUpdates: [],
};

export const toTakeDataUpdates = createAsyncThunk(
  "toTakeDataUpdates",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios(`${BASE_URL}latest_updates/list/`);
      dispatch(changeDataUpdates(data));
      // console.log(data, "toTakeDataUpdates");
    } catch (err) {
      console.log(err);
    }
  }
);

const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    changePreloader: (state, action) => {
      state.preloader = action.payload;
    },
    changeDataUpdates: (state, action) => {
      state.dataUpdates = action.payload;
    },
  },
});
export const { changePreloader, changeDataUpdates } = mainPageSlice.actions;

export default mainPageSlice.reducer;
