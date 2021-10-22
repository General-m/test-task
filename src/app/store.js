import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/AuthForm/authformSlice";

export const store = configureStore({
  reducer: {
    authForm: authReducer,
  },
});
