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
  selectsLangFrom: [],
  selectsLangTo: [],
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
    changeSelectsLangFrom: (state, action) => {
      state.selectsLangFrom = action.payload;
    },
    changeSelectsLangTo: (state, action) => {
      state.selectsLangTo = action.payload;
    },
    changeErrorFreelanceSend: (state, action) => {
      state.errorFreelanceSend = action.payload;
    },
  },
});
export const {
  changeErrorSend,
  changeSelectsLangFrom,
  changeSelectsLangTo,
  changeErrorFreelanceSend,
} = stateSendDataSlice.actions;

export default stateSendDataSlice.reducer;
