import { breakpointDown, breakpointUp } from "app/theme/media";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center; ;
`;

export const CardWrapper = styled.div`
  ${breakpointUp.xs`
    width: 400px;
  `};
  ${breakpointDown.xs`
    max-width: 100%;
  `};
`;
