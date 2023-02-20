import React, { forwardRef } from 'react';
import { ValidationMessage } from '../ValidationMessage';

import * as S from './styles';

export const SelectControl = forwardRef(
  (
    { name, defaultValue, label, onChange, onBlur, errors = {}, children },
    ref,
  ) => (
    <S.Container>
      <S.Label htmlFor={name} id={`id-${name}`}>
        {label}
      </S.Label>
      <S.Select
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-labelledby={`id-${name}`}
        defaultValue={defaultValue}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      >
        {children}
      </S.Select>
      {errors[name] && <ValidationMessage message="This field is required" />}
    </S.Container>
  ),
);
