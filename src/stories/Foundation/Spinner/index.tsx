import React from 'react';
import styled from 'styled-components';
import { Spacing8 } from '../../../shared/types';
import { StandardColors } from '../../../shared/colors';

export interface SpinnerProps {
  className?: string;
  color?: StandardColors;
  size?: Spacing8;
}

const SpinnerElement = styled.span<SpinnerProps>`
  display: inline-block;
  width: ${(p) => `var(--spacing-${p.size})`};
  height: ${(p) => `var(--spacing-${p.size})`};
  border: ${(p) =>
    `solid calc(var(--spacing-${p.size}) * 0.1) var(--color-${p.color})`};
  border-top-color: transparent;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

/**
 * Badge component
 */
export const Spinner = ({
  className,
  color = 'black',
  size = 32,
}: SpinnerProps) => {
  return <SpinnerElement className={className} color={color} size={size} />;
};
