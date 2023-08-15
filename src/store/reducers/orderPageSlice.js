import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderData: {
    fromLang: "",
    toLang: "",
    services: "",
    industries: "",
    document: null,
    date: "",
    email: "",
    phoneNum: "",
  },
};

const orderPageSlice = createSlice({
  name: "orderPageSlice",
  initialState,
  reducers: {
    changeOrderData: (state, action) => {
      state.orderData = action.payload;
    },
  },
});
export const { changeOrderData } = orderPageSlice.actions;

export default orderPageSlice.reducer;
