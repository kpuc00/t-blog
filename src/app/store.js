import { configureStore } from "@reduxjs/toolkit";
import { authReducer, counterReducer } from "../features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});
