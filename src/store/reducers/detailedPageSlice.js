import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";

const initialState = {
  everyLang: {},
};

export const dataDetailedPage = createAsyncThunk(
  "dataDetailedPage",
  async (info, { dispatch }) => {
    try {
      const { data } = await standartAxios(info?.url, info.lang);
      if (info.url === "latest_updates/list") {
        dispatch(changeEveryLang(data?.results));
      }
    } catch (err) {
      console.log(err);
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
