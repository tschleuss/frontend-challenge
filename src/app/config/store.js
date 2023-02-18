import { configureStore } from "@reduxjs/toolkit";
import { signupSlice } from "app/data/slices/signupSlice";

export const setupStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      signup: signupSlice.reducer,
    },
    preloadedState,
  });

export const store = setupStore();
