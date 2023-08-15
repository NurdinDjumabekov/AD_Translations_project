import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import servicesPageSlice from "./reducers/servicesPageSlice";
import orderPageSlice from "./reducers/orderPageSlice";
import dataSelectSlice from "./reducers/dataSelectSlice";

const reducer = combineReducers({
  mainPageSlice,
  servicesPageSlice,
  orderPageSlice,
  dataSelectSlice,
});
export const store = configureStore({
  reducer,
});
