import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { standartAxios } from "../../helpers/standartAxios";

const initialState = {
  dataReviews: [],
  dataFAQ: [],
};

export const dataAboutPage = createAsyncThunk(
  "dataAboutPage",
  async (info, { dispatch }) => {
    try {
      const { data } = await standartAxios(info?.url, info.lang);
      if (info.url === "reviews/list") {
        dispatch(changeDataReviews(data?.results));
      } else if (info.url === "faq/list") {
        dispatch(changeDataFAQ(data));
      }
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
