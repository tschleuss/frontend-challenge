import { colors, radius, spacing } from "app/theme/tokens";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  border-radius: ${radius.large};
  color: #FFFFFF;
  background-color: ${colors.brand};
  padding: ${spacing.small};
`