import React from 'react';
import { colors } from 'app/theme/tokens';
import { LoadingSpinner } from '../LoadingSpinner';

import * as S from './styles';

export const Button = ({
  onClick,
  children,
  variant = 'contained',
  type = 'button',
  disabled = false,
  loading = false,
}) => (
  <S.Button
    data-variant={variant}
    disabled={disabled || loading}
    onClick={onClick}
    type={type}
  >
    {loading ? (
      <LoadingSpinner color={colors.white} size={24} thickness={3} />
    ) : (
      children
    )}
  </S.Button>
);
