import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
  color: '',
  terms: false,
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateSignUpInfo: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { updateSignUpInfo } = signupSlice.actions;
