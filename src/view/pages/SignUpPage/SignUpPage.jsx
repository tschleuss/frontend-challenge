import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <S.Form
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/more-info");
      }}
    >
      <label id="name-label">First Name</label>
      <input
        type="text"
        name="name"
        placeholder="First Name"
        aria-labelledby="name-label"
      />
      <label id="email-label">E-mail</label>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        aria-labelledby="email-label"
      />
      <label id="password-label">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        aria-labelledby="password-label"
      />
      <S.SubmitButton>Next</S.SubmitButton>
    </S.Form>
  );
};
