import React from 'react';
import { Colors } from '../../../shared/colors';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';

export interface CardProps {
  background?: Colors;
  children: React.ReactNode;
  className?: string;
}

const Wrapper = styled.div<CardProps>`
  border-radius: ${rem(8)};
  background-color: ${(p) => `var(--color-${p.background})`};
  padding: var(--spacing-16);
`;

/**
 * Card component
 */
export const Card = ({ background = 'white', children, className }: CardProps) => {
  return (
    <Wrapper background={background} className={className}>
      {children}
    </Wrapper>
  );
};
