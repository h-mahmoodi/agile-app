import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { appReducer } from "./appSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
