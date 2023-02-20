import styled, { css, keyframes } from 'styled-components';

const ringAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Ring = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  border-radius: 50%;
  animation: ${ringAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;

  ${Ring}:nth-child(1) {
    animation-delay: -0.45s;
  }

  ${Ring}:nth-child(2) {
    animation-delay: -0.3s;
  }

  ${Ring}:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const RingWrapper = styled.div`
  ${({ color, size, thickness }) => css`
    position: relative;
    width: ${size}px;
    height: ${size}px;

    ${Ring} {
      width: ${size}px;
      height: ${size}px;
      border: ${thickness}px solid ${color};
      border-color: ${color} transparent transparent transparent;
    }
  `}
`;
