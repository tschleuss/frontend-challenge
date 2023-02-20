import { colors, radius, spacing } from 'app/theme/tokens';
import tinycolor from 'tinycolor2';
import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1em;
  line-height: 1.5em;
  border-radius: ${radius.large};
  padding: ${spacing.small};
  min-width: 128px;
  cursor: pointer;

  :disabled {
    background-color: ${tinycolor(colors.brand).setAlpha(0.7)};
    cursor: not-allowed;
  }

  &[data-variant='contained'] {
    color: ${colors.white};
    background-color: ${colors.brand};
    border: 0;
  }

  &[data-variant='contained']:hover {
    background-color: ${tinycolor(colors.brand).darken(4)};
  }

  &[data-variant='outlined'] {
    font-weight: 600;
    color: ${colors.brand};
    background-color: transparent;
    border: 1px solid ${colors.brand};
  }

  &[data-variant='outlined']:hover {
    background-color: ${tinycolor(colors.brand).brighten(92).setAlpha(0.9)};
  }
`;
