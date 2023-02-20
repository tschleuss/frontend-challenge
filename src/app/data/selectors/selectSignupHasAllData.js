import { createSelector } from "@reduxjs/toolkit";
import { selectSignupHasBasicInfo } from "./selectSignupHasBasicInfo";
import { selectSignupHasMoreInfo } from "./selectSignupHasMoreInfo";

export const selectSignupHasAllData = createSelector(
  selectSignupHasBasicInfo,
  selectSignupHasMoreInfo,
  (hasBasicInfo, hasMoreInfo) => hasBasicInfo && hasMoreInfo
);
