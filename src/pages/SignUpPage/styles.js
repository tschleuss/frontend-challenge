import { breakpointDown, breakpointUp } from "app/theme/media";
import { colors, radius, spacing } from "app/theme/tokens";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;;
`;

export const CardWrapper = styled.div`
  ${breakpointUp.xs`
    width: 400px;
  `};
  ${breakpointDown.xs`
    max-width: 100%;
  `};
`;

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