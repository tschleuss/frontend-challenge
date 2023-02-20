import { createSelector } from "@reduxjs/toolkit";
import { selectSignUp } from "./selectSignup";

export const selectSignupHasBasicInfo = createSelector(
  selectSignUp,
  (signUp) => signUp.name && signUp.email && signUp.password
);
