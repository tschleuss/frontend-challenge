import { spacing } from 'app/theme/tokens';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ActionFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: ${spacing.medium};
`;
