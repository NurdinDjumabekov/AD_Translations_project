import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  stateConsultation: true,
};

export const toTakeDataCansultation = createAsyncThunk(
  "toTakeDataCansultation",
  async (data, { dispatch }) => {
    try {
      await axios({
        method: "GET",
        url: "/////",
        data: {
          name: data.name,
          email: data.email,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
);

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
    changeStateConsultation: (state, action) => {
      state.stateConsultation = action.payload;
    },
  },
});
export const {
  changeErrorSend,
  changeSelectsLangFrom,
  changeSelectsLangTo,
  changeErrorFreelanceSend,
  changeStateConsultation,
} = stateSendDataSlice.actions;

export default stateSendDataSlice.reducer;
