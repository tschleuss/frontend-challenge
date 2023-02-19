import { useNavigate } from "react-router-dom";
import { AlertMessage } from "view/common/AlertMessage";
import { Button } from "view/common/Button";

import * as S from "./styles";

export const SignUpSuccessPage = () => {
  const navigate = useNavigate();

  const handleOnRestart = () => {
    navigate("/");
  };

  return (
    <>
      <header>
        <h1>Success</h1>
      </header>
      <S.MessageWrapper>
        <AlertMessage
          severity="success"
          message="You should receive a confirmation email soon."
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
