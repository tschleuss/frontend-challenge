import { useSignupUserMutation } from "app/api/baseApi";
import { selectSignUpSummary } from "app/data/selectors/selectSignupSummary";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const SignUpConfirmationPage = () => {
  const navigate = useNavigate();
  const signupSummary = useSelector(selectSignUpSummary);
  const [signupUser, { isLoading, isError, isSuccess }] =
    useSignupUserMutation();

  const onSubmit = async () => {
    try {
      await signupUser(signupSummary).unwrap();
      navigate("/success");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <>
      <header>
        <h1>Confirmation</h1>
      </header>
      <S.ListContainer>
        <S.ItemWrapper>
          <span>First Name:</span>
          {signupSummary.name}
        </S.ItemWrapper>
        <S.ItemWrapper>
          <span>E-mail:</span>
          {signupSummary.email}
        </S.ItemWrapper>
        <S.ItemWrapper>
          <span>Password:</span>
          {signupSummary.password}
        </S.ItemWrapper>
        <S.ItemWrapper>
          <span>Favorite Color:</span>
          {signupSummary.color}
        </S.ItemWrapper>
        <S.ItemWrapper>
          <span>Terms and Conditions:</span>{" "}
          {signupSummary.terms ? "Agreed" : "Didn't Agreed"}
        </S.ItemWrapper>
      </S.ListContainer>
      <S.ActionFooter>
        <S.ReturnButton
          type="button"
          onClick={(event) => {
            navigate("/more-info");
          }}
        >
          Back
        </S.ReturnButton>
        <S.SubmitButton type="button" onClick={onSubmit}>
          Next
        </S.SubmitButton>
      </S.ActionFooter>
    </>
  );
};
