import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changePreloader } from "./mainPageSlice";
import { transformWord } from "../../helpers/tranformWord";

const initialState = {
  orderData: {
    fromLang: "",
    toLang: "",
    services: "",
    industries: "",
    date: "",
    email: "",
    phoneNum: "",
  },
  idEverySelect: {
    fromLang: 1,
    toLang: 1,
    services: 1,
    industries: 1,
  },
  goodSendData: true,
  typeDoc: 1,
  clearData: false,
};

// для отправки данных в телеграмм бот
export const sendDataOrder = createAsyncThunk(
  "sendDataOrder",
  async (info, { dispatch }) => {
    dispatch(changePreloader(true));
    try {
      const botToken = "6190276020:AAFquYinOVhl-Q5Kq4zPBajiL8QBXuaWIjE"; // токен
      const chatId = "775337596";
      const messageText = transformWord(info);
      await axios({
        method: "POST",
        url: `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          messageText
        )}`,
      });
      /////////////////////отправка документа///////////////////////
      if (info.typeDoc === 4) {
        await axios({
          method: "POST",
          url: `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
            `ссылка : ${info.doc}`
          )}`,
        });
      } else {
        /////////////////////отправка ссылки///////////////////////
        const formData = new FormData();
        formData.append("chat_id", chatId);
        formData.append("document", info.doc);
        await axios({
          method: "POST",
          url: `https://api.telegram.org/bot${botToken}/sendDocument`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      ///////////////////////////////////////////////////////////////
      dispatch(changePreloader(false));
      dispatch(changeGoodSendData(false));
    } catch (err) {
      console.error(err);
      dispatch(changePreloader(false));
    }
  }
);

const orderPageSlice = createSlice({
  name: "orderPageSlice",
  initialState,
  reducers: {
    changeOrderData: (state, action) => {
      state.orderData = { ...state.orderData, ...action.payload };
    },
    changeTypeDoc: (state, action) => {
      state.typeDoc = action.payload;
    },
    changeGoodSendData: (state, action) => {
      state.goodSendData = action.payload;
    },
    clearAllSelects: (state, action) => {
      state.clearData = action.payload;
    },
    changeidEverySelect: (state, action) => {
      state.idEverySelect = action.payload;
    },
  },
});
export const {
  changeOrderData,
  changeTypeDoc,
  changeGoodSendData,
  clearAllSelects,
  changeidEverySelect,
} = orderPageSlice.actions;

export default orderPageSlice.reducer;
