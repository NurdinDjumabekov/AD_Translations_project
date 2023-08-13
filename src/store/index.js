import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import servicesPageSlice from "./reducers/servicesPageSlice";

const reducer = combineReducers({
  mainPageSlice,
  servicesPageSlice,
});
export const store = configureStore({
  reducer,
});
