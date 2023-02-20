import React, { forwardRef } from 'react';
import { ValidationMessage } from '../ValidationMessage';

import * as S from './styles';

export const InputControl = forwardRef(
  ({ name, type, label, placeholder, onChange, onBlur, errors = {} }, ref) => (
    <S.Container>
      <S.Label htmlFor={name} id={`id-${name}`}>
        {label}
      </S.Label>
      <S.Input
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-labelledby={`id-${name}`}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        type={type}
      />
      {errors[name] && <ValidationMessage message="This field is required" />}
    </S.Container>
  ),
);
