import { colors, radius, spacing } from "app/theme/tokens";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ActionFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
`;

export const RestartButton = styled.button`
  border-radius: ${radius.large};
  color: #ffffff;
  background-color: ${colors.brand};
  padding: ${spacing.small};
`;
