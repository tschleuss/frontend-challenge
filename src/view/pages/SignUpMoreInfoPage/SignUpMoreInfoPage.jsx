import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formSchema } from "./schema";
import * as S from "./styles";

export const SignUpMoreInfoPage = () => {
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
    console.log(data);
    navigate("/confirmation");
  };

  return (
    <>
      <header>
        <h1>Additional Info</h1>
      </header>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <label id="color-label">Select your favorite color</label>
        <select
          defaultValue="default"
          aria-invalid={errors.color ? "true" : "false"}
          {...register("color", { required: true })}
        >
          <option value="default" disabled>
            Choose a color...
          </option>
          <option value="white">white</option>
          <option value="blue">blue</option>
        </select>
        {errors.color && <span>This field is required</span>}
        <label>
          <input
            type="checkbox"
            name="terms"
            value={true}
            aria-invalid={errors.terms ? "true" : "false"}
            {...register("terms", { required: true })}
          />
          I agree to Terms and Conditions
        </label>
        {errors.terms && <span>This field is required</span>}
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
