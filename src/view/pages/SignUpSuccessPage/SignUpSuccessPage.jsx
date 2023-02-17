import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const SignUpSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Success</h1>
      </header>
      <p>You should receive a confirmation email soon.</p>
      <S.ActionFooter>
        <S.RestartButton
          type="button"
          onClick={(event) => {
            navigate("/");
          }}
        >
          Restart
        </S.RestartButton>
      </S.ActionFooter>
    </>
  );
};
