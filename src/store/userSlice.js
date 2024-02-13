import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  isLogin: false,
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.email = action.payload;
    },
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.token = "";
      state.isLogin = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
