import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  login: "developer21",
  password: "123456",
};

export const authformSlice = createSlice({
  name: "authForm",
  initialState,
  reducers: {
    authReducer: (state) => {
      state.auth = !state.auth;
    },
  },
});

export const { authReducer } = authformSlice.actions;

export const getLogin = (state) => state.authForm.login;
export const getPassword = (state) => state.authForm.password;
export const authStatus = (state) => state.authForm.auth;

export default authformSlice.reducer;
