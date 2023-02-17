import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const SignUpErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Error</h1>
      </header>
      <p>Uh oh, something went wrong. Please try again later</p>
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
