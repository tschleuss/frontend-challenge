import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { formSchema } from "./schema";
import { useDispatch } from "react-redux";
import { updateSignUpInfo } from "app/data/slices/signupSlice";
import { InputControl } from "view/common/InputControl";
import { Button } from "view/common/Button";

import * as S from "./styles";

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    criteriaMode: "all",
  });

  const handleOnSubmit = (data, event) => {
    dispatch(updateSignUpInfo(data));
    navigate("/more-info");
  };

  const nameField = register("name", { required: true });
  const emailField = register("email", { required: true });
  const passwordField = register("password", { required: true });

  return (
    <>
      <header>
        <h1>Sign Up</h1>
      </header>
      <S.Form onSubmit={handleSubmit(handleOnSubmit)}>
        <InputControl
          type="text"
          label="First Name"
          placeholder="First Name"
          errors={errors}
          {...nameField}
        />
        <InputControl
          type="text"
          label="E-mail"
          placeholder="Email Address"
          errors={errors}
          {...emailField}
        />
        <InputControl
          type="password"
          label="Password"
          placeholder="Password"
          errors={errors}
          {...passwordField}
        />
        <S.ActionFooter>
          <Button type="submit">Next</Button>
        </S.ActionFooter>
      </S.Form>
    </>
  );
};
