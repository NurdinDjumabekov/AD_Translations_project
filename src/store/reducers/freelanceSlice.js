import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changePreloader } from "./mainPageSlice";
import { changeGoodSendData } from "./orderPageSlice";

const initialState = {
  dataFreelancers_from: {
    lang1: {
      lang: "Kyrgyz",
      levelLang: "A1",
    },
    lang2: {
      lang: "Russian",
      levelLang: "A1",
    },
    lang3: {
      lang: "English",
      levelLang: "A1",
    },
  },
  dataFreelancers_to: {
    lang1: {
      lang: "Kyrgyz",
      levelLang: "A1",
    },
    lang2: {
      lang: "Russian",
      levelLang: "A1",
    },
    lang3: {
      lang: "English",
      levelLang: "A1",
    },
  },
  dataFreelance: {
    name: "",
    email: "",
    phone: "",
  },
};

export const sendDataFreelancers = createAsyncThunk(
  "sendDataFreelancers",
  async (info, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const botToken = `6218914835:AAGGZBiQ7OZlp2o7SMUGZScr_4kgy56-daA`; // токен
      const chatId = "775337596";
      const userData = `\nФИО: ${info.data.name} \nEmail: ${info.data.email} \nНомер: ${info.data.phone} \n`;
      let messageText = `Работник: ${userData} \nязыки: \n${info.selects}`;
      await axios({
        method: "POST",
        url: `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          messageText
        )}`,
      });
      dispatch(changePreloader(false));
      dispatch(changeGoodSendData(false));
      dispatch(changeDataFreelance({ name: "", email: "", phone: "" }));
      /// очищаю поля
    } catch (err) {
      console.error(err);
      dispatch(changePreloader(false));
      // dispatch(changeGoodSendData(true));
    }
  }
);
// dui.nurdin@gmail.com

const freelanceSlice = createSlice({
  name: "freelanceSlice",
  initialState,
  reducers: {
    changeDataFreelancers_from: (state, action) => {
      state.dataFreelancers_from = action.payload;
    },
    changeDataFreelancers_to: (state, action) => {
      state.dataFreelancers_to = action.payload;
    },
    changeDataFreelance: (state, action) => {
      state.dataFreelance = action.payload;
    },
  },
});
export const {
  changeDataFreelancers_from,
  changeDataFreelancers_to,
  changeDataFreelance,
} = freelanceSlice.actions;

export default freelanceSlice.reducer;
