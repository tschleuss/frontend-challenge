import { selectSignUpSummary } from "app/data/selectors/selectSignupSummary";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const SignUpConfirmationPage = () => {
  const navigate = useNavigate();
  const signupSummary = useSelector(selectSignUpSummary);

  return (
    <>
      <header>
        <h1>Confirmation</h1>
      </header>
      <p>
        <span>First Name:</span> {signupSummary.name}
      </p>
      <p>
        <span>E-mail:</span> {signupSummary.email}
      </p>
      <p>
        <span>Password:</span> {signupSummary.password}
      </p>
      <p>
        <span>Favorite Color:</span> {signupSummary.color}
      </p>
      <p>
        <span>Terms and Conditions:</span>{" "}
        {signupSummary.terms ? "Agreed" : "Didn't Agreed"}
      </p>
      <S.ActionFooter>
        <S.ReturnButton
          type="button"
          onClick={(event) => {
            navigate("/more-info");
          }}
        >
          Back
        </S.ReturnButton>
        <S.SubmitButton
          type="button"
          onClick={(event) => {
            navigate("/success");
          }}
        >
          Next
        </S.SubmitButton>
      </S.ActionFooter>
    </>
  );
};
