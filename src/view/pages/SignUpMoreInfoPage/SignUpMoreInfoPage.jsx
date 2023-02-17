import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const SignUpMoreInfoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Additional Info</h1>
      </header>
      <S.Form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/confirmation");
        }}
      >
        <label id="color-label">Select your favorite color</label>
        <select>
          <option>white</option>
          <option>blue</option>
        </select>
        <label>
          <input type="checkbox" name="terms" value="value" />I agree to Terms
          and Conditions
        </label>
        <S.ActionFooter>
          <S.ReturnButton
            type="button"
            onClick={(event) => {
              navigate("/");
            }}
          >
            Back
          </S.ReturnButton>
          <S.SubmitButton type="submit">Next</S.SubmitButton>
        </S.ActionFooter>
      </S.Form>
    </>
  );
};
