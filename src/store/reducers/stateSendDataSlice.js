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
  goodSendConsultation: false,
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
          message: data.message,
        },
      });
      dispatch(changeGoodSendConsultation(true));
      setTimeout(() => {
        dispatch(changeGoodSendConsultation(false));
      }, 2000);
      // setTimeout(() => {
      //   navigate("/");
      // }, 3000);
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
    changeGoodSendConsultation: (state, action) => {
      state.goodSendConsultation = action.payload;
    },
  },
});
export const {
  changeErrorSend,
  changeSelectsLangFrom,
  changeSelectsLangTo,
  changeErrorFreelanceSend,
  changeStateConsultation,
  changeGoodSendConsultation,
} = stateSendDataSlice.actions;

export default stateSendDataSlice.reducer;
