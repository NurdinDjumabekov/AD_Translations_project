import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorSend: {
    fromLang: false,
    toLang: false,
    services: false,
    industries: false,
    date: false,
    email: false,
    phoneNum: false,
    doc: false,
  },
  allSelects: [],
  errorFreelanceSend: {
    name: false,
    email: false,
    phoneNum: false,
  },
};
const stateSendDataSlice = createSlice({
  name: "stateSendDataSlice",
  initialState,
  reducers: {
    changeErrorSend: (state, action) => {
      state.errorSend = action.payload;
    },
    changeAllSelects: (state, action) => {
      state.allSelects = action.payload;
    },
    changeErrorFreelanceSend: (state, action) => {
      state.errorFreelanceSend = action.payload;
    },
  },
});
export const { changeErrorSend, changeAllSelects, changeErrorFreelanceSend } =
  stateSendDataSlice.actions;

export default stateSendDataSlice.reducer;
