import { colors, radius, spacing } from "app/theme/tokens";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ActionFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`

export const ReturnButton = styled.button`
  border-radius: ${radius.large};
  color: #ffffff;
  background-color: ${colors.brand};
  padding: ${spacing.small};
`;

export const SubmitButton = styled.button`
  border-radius: ${radius.large};
  color: #ffffff;
  background-color: ${colors.brand};
  padding: ${spacing.small};
`;
