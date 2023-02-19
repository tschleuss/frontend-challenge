import { useNavigate } from "react-router-dom";
import { AlertMessage } from "view/common/AlertMessage";
import { Button } from "view/common/Button";

import * as S from "./styles";

export const SignUpErrorPage = () => {
  const navigate = useNavigate();

  const handleOnRestart = () => {
    navigate("/");
  };

  return (
    <>
      <header>
        <h1>Error</h1>
      </header>
      <S.MessageWrapper>
        <AlertMessage
          severity="error"
          message="Uh oh, something went wrong. Please try again later"
        />
      </S.MessageWrapper>
      <S.ActionFooter>
        <Button type="button" onClick={handleOnRestart}>
          Restart
        </Button>
      </S.ActionFooter>
    </>
  );
};
