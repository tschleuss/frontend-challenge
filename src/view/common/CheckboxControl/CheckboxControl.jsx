import { forwardRef } from "react";
import { ValidationMessage } from "../ValidationMessage";
import * as S from "./styles";

export const CheckboxControl = forwardRef(
  ({ name, label, onChange, onBlur, errors = {} }, ref) => (
    <S.Container>
      <S.Label id={`id-${name}`}>
        <S.Input
          type="checkbox"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          aria-labelledby={`id-${name}`}
          aria-invalid={errors[name] ? "true" : "false"}
        />
        {label}
      </S.Label>
      {errors[name] && <ValidationMessage message="This field is required" />}
    </S.Container>
  )
);
