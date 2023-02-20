import React, { forwardRef } from 'react';
import { ValidationMessage } from '../ValidationMessage';

import * as S from './styles';

export const CheckboxControl = forwardRef(
  ({ name, label, onChange, onBlur, errors = {} }, ref) => (
    <S.Container>
      <S.Label id={`id-${name}`}>
        <S.Input
          aria-invalid={errors[name] ? 'true' : 'false'}
          aria-labelledby={`id-${name}`}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          type="checkbox"
        />
        {label}
      </S.Label>
      {errors[name] && <ValidationMessage message={errors[name].message} />}
    </S.Container>
  ),
);
