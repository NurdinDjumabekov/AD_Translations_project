import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import servicesPageSlice from "./reducers/servicesPageSlice";
import orderPageSlice from "./reducers/orderPageSlice";
import dataSelectSlice from "./reducers/dataSelectSlice";
import stateSendDataSlice from "./reducers/stateSendDataSlice";
import freelanceSlice from "./reducers/freelanceSlice";
import aboutPageSlice from "./reducers/aboutPageSlice";

const reducer = combineReducers({
  mainPageSlice,
  servicesPageSlice,
  orderPageSlice,
  dataSelectSlice,
  stateSendDataSlice,
  freelanceSlice,
  aboutPageSlice,
});
export const store = configureStore({
  reducer,
});
