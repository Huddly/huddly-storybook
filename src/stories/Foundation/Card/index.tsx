import React from 'react';
import { Colors } from '../../../shared/types';
import styled from 'styled-components';

export interface CardProps {
  background?: Colors;
  children: React.ReactNode;
  className?: string;
}

const Wrapper = styled.div<CardProps>`
  border-radius: 8px;
  background-color: ${(p) => p.background};
  padding: var(--spacing-16);
`;

/**
 * Card component
 */
export const Card = ({
  background = 'white',
  children,
  className,
}: CardProps) => {
  return (
    <Wrapper background={background} className={className}>
      {children}
    </Wrapper>
  );
};
