import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const SignUpConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Confirmation</h1>
      </header>
      <p>
        <span>First Name:</span> John
      </p>
      <p>
        <span>E-mail:</span> john@domain.com
      </p>
      <p>
        <span>Password:</span> ******
      </p>
      <p>
        <span>Favorite Color:</span> blue
      </p>
      <p>
        <span>Terms and Conditions:</span> agreed
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
