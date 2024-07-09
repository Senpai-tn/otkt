import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/uiReducer";

export const store = configureStore({
  reducer: { uiSlice },
});
