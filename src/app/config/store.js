import { configureStore } from '@reduxjs/toolkit';
import { api } from 'app/api/baseApi';
import { signupSlice } from 'app/data/slices/signupSlice';

export const setupStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      signup: signupSlice.reducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });

export const store = setupStore();
