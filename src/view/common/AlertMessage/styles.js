import { radius } from 'app/theme/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 6px 16px;
  border-radius: 4px;
  border-radius: ${radius.large};

  &[data-severity='error'] {
    background-color: #fdeded;
  }

  &[data-severity='success'] {
    background-color: #edf7ed;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;

  ${Container}[data-severity="error"] & {
    color: #d32f2f;
  }

  ${Container}[data-severity="success"] & {
    color: #2e7d32;
  }
`;

export const MessageWrapper = styled.div`
  padding: 8px 0px;
  min-width: 0px;
  overflow: auto;

  ${Container}[data-severity="error"] & {
    color: #5f2120;
  }

  ${Container}[data-severity="success"] & {
    color: #1e4620;
  }
`;
