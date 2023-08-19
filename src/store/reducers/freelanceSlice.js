import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataFreelancers_from: {
    langOne: {
      lang: "English",
      levelLang: "A1",
    },
    langTwo: {
      lang: "English",
      levelLang: "A1",
    },
    langThree: {
      lang: "English",
      levelLang: "A1",
    },
  },
  dataFreelancers_to: {
    langOne: {
      lang: "Russian",
      levelLang: "A1",
    },
    langTwo: {
      lang: "Russian",
      levelLang: "A1",
    },
    langThree: {
      lang: "Russian",
      levelLang: "A1",
    },
  },
};

export const sendDataFreelancers = createAsyncThunk(
  "sendDataFreelancers",
  async (info, { dispatch }) => {
    try {
      const botToken = `6218914835:AAGGZBiQ7OZlp2o7SMUGZScr_4kgy56-daA`; // токен
      const chatId = "775337596";
      //   const messageText = `Работники! \n \nServices : ${info.orderData.services}, \nindustries : ${info.orderData.industries}, \nсрок : ${info.orderData.date}, \nc языка : ${info.orderData.fromLang}, \nна язык : ${info.orderData.toLang}, \nemail : ${info.orderData.email}, \nnumber : ${info.orderData.phoneNum}`;
      let messageText = "сообщение пришло???";
      await axios({
        method: "POST",
        url: `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          messageText
        )}`,
      });

      //   dispatch(changePreloader(false));
      //   dispatch(changeGoodSendData(false));
    } catch (err) {
      console.error(err);
    }
  }
);

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
  },
});
export const { changeDataFreelancers_from, changeDataFreelancers_to } =
  freelanceSlice.actions;

export default freelanceSlice.reducer;
