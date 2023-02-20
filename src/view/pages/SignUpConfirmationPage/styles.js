import { spacing } from 'app/theme/tokens';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  margin-bottom: 1rem;
`;

export const ItemWrapper = styled.p`
  margin: 0 0 0.25rem 0;
  span {
    margin-right: 0.25rem;
    font-weight: 600;
  }
`;

export const ActionFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.medium};
`;
