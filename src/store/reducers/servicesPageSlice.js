import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDataID } from "../../helpers/addDataID";
import { changePreloader } from "./mainPageSlice";
import {
  changeDataIndustriesForServer,
  changeDataServicesForServer,
} from "./onServerSlice";
import { standartAxios } from "../../helpers/standartAxios";

const initialState = {
  dataServices: [],
  dataForSearch: [],
  search: "",
  dataIndustries: [],
  allLang: [],
  allLangForSelect: [],
};

export const dataServices = createAsyncThunk(
  "dataServices",
  async (info, { dispatch }) => {
    try {
      dispatch(changePreloader(true));
      const { data } = await standartAxios(info?.url, info.lang);
      if (info.url === "services/list") {
        dispatch(toTakeDataServices(addDataID(data?.results)));
        dispatch(changeDataForSearch(addDataID(data?.results)));
        dispatch(changeDataServicesForServer(data?.results));
      } else if (info.url === "language/list") {
        dispatch(changeAllLang(data));
        dispatch(toTakeAllLangForSelect(data));
      } else if (info.url === "industries/list") {
        dispatch(changeDataIndustries(data?.results));
        dispatch(changeDataIndustriesForServer(data?.results));
      }
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
      dispatch(changePreloader(false));
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
    changeAllLang: (state, action) => {
      state.allLang = action.payload;
    },
    toTakeAllLangForSelect: (state, action) => {
      state.allLangForSelect = action.payload;
    },
  },
});
export const {
  toTakeDataServices,
  changeDataForSearch,
  changeSearch,
  changeDataIndustries,
  changeAllLang,
  toTakeAllLangForSelect,
} = servicesPageSlice.actions;

export default servicesPageSlice.reducer;
