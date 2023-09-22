/// для отправки данных только на сервер!
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { transformWordForServer } from "../../helpers/transformWordForServer";
import { changeGoodSendConsultation } from "./stateSendDataSlice";
import { changePreloader } from "./mainPageSlice";

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const initialState = {
  dataServices: [],
  dataIndustries: [],
  langData: "en",
};
// они нужны для отправки данных  на сервер с актуальными id, а в других states я меняю (перебиваю id)

export const toSendOrderData = createAsyncThunk(
  "toSendOrderData",
  async (data) => {
    try {
      await axios({
        method: "POST",
        url: `${BASE_URL}order/create/`,
        data: transformWordForServer(data),
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const sendConsultationData = createAsyncThunk(
  "sendConsultationData",
  async (data, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      await axios({
        method: "POST",
        url: `${BASE_URL}consult/create/`,
        data: {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      });
      dispatch(changePreloader(false));
      dispatch(changeGoodSendConsultation(true));
      setTimeout(() => {
        dispatch(changeGoodSendConsultation(false));
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }
);

const onServerSlice = createSlice({
  name: "onServerSlice",
  initialState,
  reducers: {
    changeDataServicesForServer: (state, action) => {
      state.dataServices = action.payload;
    },
    changeDataIndustriesForServer: (state, action) => {
      state.dataIndustries = action.payload;
    },
    changeLangData: (state, action) => {
      state.langData = action.payload;
    },
  },
});
export const {
  changeDataServicesForServer,
  changeDataIndustriesForServer,
  changeLangData,
} = onServerSlice.actions;

export default onServerSlice.reducer;
