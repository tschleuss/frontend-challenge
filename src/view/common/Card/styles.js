import { colors, radius, spacing } from 'app/theme/tokens';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.containerBackground};
  padding: ${spacing.medium};
  border-radius: ${radius.large};
  box-shadow: 10px 10px 13px -7px rgba(0, 0, 0, 0.1);
`;
