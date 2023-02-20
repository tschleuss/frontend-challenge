import React from 'react';
import Skeleton from 'react-loading-skeleton';

import * as S from './styles';
import 'react-loading-skeleton/dist/skeleton.css';

export const ColorSelectSkeleton = () => (
  <S.Container>
    <S.LabelSkeletonWrapper>
      <Skeleton />
    </S.LabelSkeletonWrapper>
    <Skeleton height={30} />
  </S.Container>
);
