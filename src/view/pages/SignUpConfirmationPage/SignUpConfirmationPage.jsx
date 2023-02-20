import { useSignupUserMutation } from "app/api/baseApi";
import { selectSignUp } from "app/data/selectors/selectSignup";
import { selectSignupHasAllData } from "app/data/selectors/selectSignupHasAllData";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "view/common/Button";

import * as S from "./styles";

export const SignUpConfirmationPage = () => {
  const navigate = useNavigate();
  const hasAllData = useSelector(selectSignupHasAllData);
  const signupSummary = useSelector(selectSignUp);
  const [signupUser, { isLoading }] = useSignupUserMutation();

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

  if (!hasAllData) {
    return <Navigate to="/error" />;
  }

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
          {"*".repeat(signupSummary.password.length)}
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
          Submit
        </Button>
      </S.ActionFooter>
    </>
  );
};
