import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addDataID } from "../../helpers/addDataID";
import { changePreloader } from "./mainPageSlice";

const initialState = {
  dataServices: [],
  dataForSearch: [],
  search: "",
};

export const toTakeAllDataServices = createAsyncThunk(
  "toTakeAllDataServices",
  async (info, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const { data } = await axios({
        method: "GET",
        url: "https://64186f7a29e7e36438e8aa19.mockapi.io/items",
      });
      //   console.log(data);
      dispatch(toTakeDataServices(addDataID(data)));
      dispatch(changeDataForSearch(addDataID(data)));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
      // dispatch(changePreloader(false));
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
  },
});
export const { toTakeDataServices, changeDataForSearch, changeSearch } =
  servicesPageSlice.actions;

export default servicesPageSlice.reducer;
