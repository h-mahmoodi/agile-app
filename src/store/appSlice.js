import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    isOpen: false,
    title: null,
    value: null,
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.title = action.payload.title;
      state.modal.value = action.payload.value;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.title = null;
      state.modal.value = null;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
