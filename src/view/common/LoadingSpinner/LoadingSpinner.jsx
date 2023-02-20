import React from 'react';
import { colors } from 'app/theme/tokens';

import * as S from './styles';

export const LoadingSpinner = ({
  color = colors.black,
  size = 32,
  thickness = 4,
}) => (
  <S.Container>
    <S.RingWrapper color={color} size={size} thickness={thickness}>
      <S.Ring></S.Ring>
      <S.Ring></S.Ring>
      <S.Ring></S.Ring>
      <S.Ring></S.Ring>
    </S.RingWrapper>
  </S.Container>
);
