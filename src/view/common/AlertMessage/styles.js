import { colors, radius } from 'app/theme/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 6px 16px;
  border-radius: 4px;
  border-radius: ${radius.large};

  &[data-severity='error'] {
    background-color: ${colors.errorBackground};
  }

  &[data-severity='success'] {
    background-color: ${colors.successBackground};
  }
`;

export const IconWrapper = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;

  ${Container}[data-severity='error'] & {
    color: ${colors.red};
  }

  ${Container}[data-severity='success'] & {
    color: ${colors.green};
  }
`;

export const MessageWrapper = styled.div`
  padding: 8px 0px;
  min-width: 0px;
  overflow: auto;

  ${Container}[data-severity='error'] & {
    color: ${colors.errorText};
  }

  ${Container}[data-severity='success'] & {
    color: ${colors.successText};
  }
`;
