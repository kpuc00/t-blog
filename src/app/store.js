import { configureStore } from "@reduxjs/toolkit";
import { userReducer, blogReducer } from "../features";

export const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer,
  },
});
