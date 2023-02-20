import { createSelector } from "@reduxjs/toolkit";
import { selectSignUp } from "./selectSignup";

export const selectSignupHasMoreInfo = createSelector(
  selectSignUp,
  (signUp) => signUp.color && signUp.terms
);
