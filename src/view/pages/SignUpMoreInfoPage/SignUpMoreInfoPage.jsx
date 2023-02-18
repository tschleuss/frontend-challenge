import { yupResolver } from "@hookform/resolvers/yup";
import { useFetchColorsQuery } from "app/api/baseApi";
import { updateSignUpInfo } from "app/data/slices/signupSlice";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckboxControl } from "view/common/CheckboxControl";
import { SelectControl } from "view/common/SelectControl";
import { formSchema } from "./schema";
import * as S from "./styles";

export const SignUpMoreInfoPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, data: colors = [] } = useFetchColorsQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    criteriaMode: "all",
  });

  const onSubmit = (data, event) => {
    dispatch(updateSignUpInfo(data));
    navigate("/confirmation");
  };

  const colorField = register("color", { required: true });
  const termsField = register("terms", { required: true });

  return (
    <>
      <header>
        <h1>Additional Info</h1>
      </header>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <SelectControl
          label="Select your favorite color"
          defaultValue="-default-"
          errors={errors}
          {...colorField}
        >
          <option value="-default-" disabled>
            Select a color...
          </option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </SelectControl>
        <CheckboxControl
          type="checkbox"
          label="I agree to Terms and Conditions"
          errors={errors}
          {...termsField}
        />
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
