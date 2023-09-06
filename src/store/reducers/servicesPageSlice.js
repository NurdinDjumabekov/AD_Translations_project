import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addDataID } from "../../helpers/addDataID";
import { changePreloader } from "./mainPageSlice";

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const initialState = {
  dataServices: [],
  dataForSearch: [],
  search: "",
  dataIndustries: [],
};

export const toTakeAllDataServices = createAsyncThunk(
  "toTakeAllDataServices",
  async (info, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const { data } = await axios(`${BASE_URL}services/list/`);
      dispatch(toTakeDataServices(addDataID(data)));
      dispatch(changeDataForSearch(addDataID(data)));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
      dispatch(changePreloader(false));
    }
  }
);

export const toTakeAllLang = createAsyncThunk(
  "toTakeAllLang",
  async (info, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const { data } = await axios({
        method: "GET",
        url: "",
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const toTakeIndustriesData = createAsyncThunk(
  "toTakeIndustriesData",
  async (info, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const { data } = await axios(`${BASE_URL}industries/list/`);
      dispatch(changeDataIndustries(data));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
    }
  }
);

const servicesPageSlice = createSlice({
  name: "servicesPageSlice",
  initialState,
  reducers: {
    toTakeDataServices: (state, action) => {
      state.dataServices = action.payload;
    },
    changeDataForSearch: (state, action) => {
      state.dataForSearch = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
    changeDataIndustries: (state, action) => {
      state.dataIndustries = action.payload;
    },
  },
});
export const {
  toTakeDataServices,
  changeDataForSearch,
  changeSearch,
  changeDataIndustries,
} = servicesPageSlice.actions;

export default servicesPageSlice.reducer;
