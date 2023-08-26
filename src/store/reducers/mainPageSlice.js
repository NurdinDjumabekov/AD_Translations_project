import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  preloader: false,
  dataUpdates: [],
};

export const toTakeDataUpdates = createAsyncThunk(
  "toTakeDataUpdates",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://64186f7a29e7e36438e8aa19.mockapi.io/items`,
      });
      // dispatch(changeDataUpdates(data));
      // console.log(data);
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
