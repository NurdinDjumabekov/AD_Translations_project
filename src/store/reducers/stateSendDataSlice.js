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
};
const stateSendDataSlice = createSlice({
  name: "stateSendDataSlice",
  initialState,
  reducers: {
    changeErrorSend: (state, action) => {
      state.errorSend = action.payload;
    },
  },
});
export const { changeErrorSend } = stateSendDataSlice.actions;

export default stateSendDataSlice.reducer;
