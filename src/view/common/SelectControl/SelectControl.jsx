import { forwardRef } from "react";
import { ValidationMessage } from "../ValidationMessage";

import * as S from "./styles";

export const SelectControl = forwardRef(
  (
    { name, defaultValue, label, onChange, onBlur, errors = {}, children },
    ref
  ) => (
    <S.Container>
      <S.Label id={`id-${name}`} htmlFor={name}>
        {label}
      </S.Label>
      <S.Select
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={defaultValue}
        aria-labelledby={`id-${name}`}
        aria-invalid={errors[name] ? "true" : "false"}
      >
        {children}
      </S.Select>
      {errors[name] && <ValidationMessage message="This field is required" />}
    </S.Container>
  )
);
