import { forwardRef } from "react";
import { ValidationMessage } from "../ValidationMessage";
import * as S from "./styles";

export const InputControl = forwardRef(
  ({ name, type, label, placeholder, onChange, onBlur, errors = {} }, ref) => (
    <S.Container>
      <S.Label id={`id-${name}`}>{label}</S.Label>
      <S.Input
        type={type}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-labelledby={`id-${name}`}
        aria-invalid={errors[name] ? "true" : "false"}
      />
      {errors[name] && <ValidationMessage message="This field is required" />}
    </S.Container>
  )
);
