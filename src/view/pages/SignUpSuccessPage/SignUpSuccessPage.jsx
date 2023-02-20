import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertMessage } from 'view/common/AlertMessage';
import { Button } from 'view/common/Button';

import * as S from './styles';

export const SignUpSuccessPage = () => {
  const navigate = useNavigate();

  const handleOnRestart = () => {
    navigate('/');
  };

  return (
    <>
      <header>
        <h1>Success</h1>
      </header>
      <S.MessageWrapper>
        <AlertMessage
          message="You should receive a confirmation email soon."
          severity="success"
        />
      </S.MessageWrapper>
      <S.ActionFooter>
        <Button onClick={handleOnRestart} type="button">
          Restart
        </Button>
      </S.ActionFooter>
    </>
  );
};
