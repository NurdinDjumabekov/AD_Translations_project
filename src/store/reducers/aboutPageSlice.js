import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataReviews: [],
  dataFAQ: [],
};

export const toTakeDataReviews = createAsyncThunk(
  "toTakeDataUpdates",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        // url: " https://6443c7ca90738aa7c0778850.mockapi.io/infoportal",
      });
      dispatch(changeDataReviews(data));
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const toTakeFAQ = createAsyncThunk(
  "toTakeFAQ",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        // url: " https://6443c7ca90738aa7c0778850.mockapi.io/infoportal",
      });
      dispatch(changeDataReviews(data));
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
);

const aboutPageSlice = createSlice({
  name: "aboutPageSlice",
  initialState,
  reducers: {
    changeDataReviews: (state, action) => {
      state.dataReviews = action.payload;
    },
    changeDataFAQ: (state, action) => {
      state.dataFAQ = action.payload;
    },
  },
});
export const { changeDataReviews, changeDataFAQ } = aboutPageSlice.actions;

export default aboutPageSlice.reducer;
