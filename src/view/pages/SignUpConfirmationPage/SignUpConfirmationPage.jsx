import { useSignupUserMutation } from "app/api/baseApi";
import { selectSignUpSummary } from "app/data/selectors/selectSignupSummary";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "view/common/Button";

import * as S from "./styles";

export const SignUpConfirmationPage = () => {
  const navigate = useNavigate();
  const signupSummary = useSelector(selectSignUpSummary);
  const [signupUser, { isLoading, isError, isSuccess }] =
    useSignupUserMutation();

  const handleOnSubmit = async () => {
    try {
      await signupUser(signupSummary).unwrap();
      navigate("/success");
    } catch (error) {
      navigate("/error");
    }
  };

  const handleOnReturn = () => {
    navigate("/more-info");
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
          <span>Terms and Conditions:</span>
          {signupSummary.terms ? "Agreed" : "Didn't Agreed"}
        </S.ItemWrapper>
      </S.ListContainer>
      <S.ActionFooter>
        <Button type="button" variant="outlined" onClick={handleOnReturn}>
          Back
        </Button>
        <Button type="button" onClick={handleOnSubmit} loading={isLoading}>
          Next
        </Button>
      </S.ActionFooter>
    </>
  );
};
