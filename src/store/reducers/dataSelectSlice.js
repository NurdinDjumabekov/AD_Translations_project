import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  typeServices: [],
  typeIndustries: [],
  typeLanguage: [],
};

export const toTakeServices = createAsyncThunk(
  "toTakeServices",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://64db6e5b593f57e435b0f36c.mockapi.io/se",
      });
      //   console.log(data);
      dispatch(toTakeTypeServices(data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const toTakeIndustries = createAsyncThunk(
  "toTakeIndustries",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://64db6e5b593f57e435b0f36c.mockapi.io/se",
      });
      //   console.log(data);
      dispatch(toTakeTypeIndustries(data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const toTakeLanguage = createAsyncThunk(
  "toTakeLanguage",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: " https://6443c7ca90738aa7c0778850.mockapi.io/infoportal",
      });
      dispatch(toTakeTypeLanguage(data));
    } catch (err) {
      console.log(err);
    }
  }
);

const dataSelectSlice = createSlice({
  name: "dataSelectSlice",
  initialState,
  reducers: {
    toTakeTypeServices: (state, action) => {
      state.typeServices = action.payload;
    },
    toTakeTypeIndustries: (state, action) => {
      state.typeIndustries = action.payload;
    },
    toTakeTypeLanguage: (state, action) => {
      state.typeLanguage = action.payload;
    },
  },
});
export const { toTakeTypeServices, toTakeTypeIndustries, toTakeTypeLanguage } =
  dataSelectSlice.actions;

export default dataSelectSlice.reducer;
