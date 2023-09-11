import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import servicesPageSlice from "./reducers/servicesPageSlice";
import orderPageSlice from "./reducers/orderPageSlice";
import stateSendDataSlice from "./reducers/stateSendDataSlice";
import freelanceSlice from "./reducers/freelanceSlice";
import aboutPageSlice from "./reducers/aboutPageSlice";
import onServerSlice from "./reducers/onServerSlice";

const reducer = combineReducers({
  mainPageSlice,
  servicesPageSlice,
  orderPageSlice,
  stateSendDataSlice,
  freelanceSlice,
  aboutPageSlice,
  onServerSlice,
});
export const store = configureStore({
  reducer,
});
