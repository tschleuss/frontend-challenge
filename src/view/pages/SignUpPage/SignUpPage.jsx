import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { formSchema } from "./schema";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { updateSignUpInfo } from "app/data/slices/signupSlice";

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

  const onSubmit = (data, event) => {
    dispatch(updateSignUpInfo(data))
    navigate("/more-info");
  };

  return (
    <>
      <header>
        <h1>Sign Up</h1>
      </header>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <label id="name-label">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          aria-labelledby="name-label"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <label id="email-label">E-mail</label>
        <input
          type="email"
          placeholder="Email Address"
          aria-labelledby="email-label"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <label id="password-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          aria-labelledby="password-label"
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <S.SubmitButton type="submit">Next</S.SubmitButton>
      </S.Form>
    </>
  );
};
