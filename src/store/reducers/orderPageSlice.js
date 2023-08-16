import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

// export const sendDataOrder = createAsyncThunk(
//   "sendDataOrder",
//   async (info, { dispatch }) => {
//     // console.log(data);
//     try {
//       const data = await axios({
//         method: "GEt",
//         url: "https://api.telegram.org/bot6190276020:AAFquYinOVhl-Q5Kq4zPBajiL8QBXuaWIjE/getUpdates",
//       });
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

export const sendDataOrder = createAsyncThunk(
  "sendDataOrder",
  async (info, { dispatch }) => {
    // console.log(info.date);
    try {
      const botToken = "6190276020:AAFquYinOVhl-Q5Kq4zPBajiL8QBXuaWIjE"; // Замените на ваш токен
      const chatId = "775337596";
      const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      `Новый заказ! \n \nServices : ${info.services}, \nindustries : ${info.industries}, \nсрок : ${info.date}, \nc языка : ${info.fromLang}, \nна язык : ${info.toLang}, \nemail : ${info.email}, \nnumber : ${info.phoneNum}`
      )}`;
      await axios.post(apiUrl);
    } catch (err) {
      console.error(err);
    }
  }
);

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
