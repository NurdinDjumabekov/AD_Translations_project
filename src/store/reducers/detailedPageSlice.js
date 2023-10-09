import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";
import { changePreloader } from "./mainPageSlice";

const initialState = {
  everyLang: [],
};

export const dataDetailedPage = createAsyncThunk(
  "dataDetailedPage",
  async (info, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const { data } = await standartAxios(info?.url, info.lang);
      dispatch(changeEveryLang(data));
      dispatch(changePreloader(false));
    } catch (err) {
      console.log(err);
      dispatch(changePreloader(false));
    }
  }
);

const detailedPageSlice = createSlice({
  name: "detailedPageSlice",
  initialState,
  reducers: {
    changeEveryLang: (state, action) => {
      state.everyLang = action.payload;
    },
  },
});
export const { changeEveryLang } = detailedPageSlice.actions;

export default detailedPageSlice.reducer;
