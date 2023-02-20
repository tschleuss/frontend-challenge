import { css } from 'styled-components';
import { viewport } from './tokens';

export const breakpointDown = Object.keys(viewport).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${viewport[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const breakpointUp = Object.keys(viewport).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${viewport[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
