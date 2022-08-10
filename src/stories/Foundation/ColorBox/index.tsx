import React from 'react';
import styled from 'styled-components';
import { Colors } from '@shared/colors';

export interface ColorProps {
  color: Colors;
  children?: React.ReactNode;
  className?: string;
}

const ColoredBox = styled.div<{ color: Colors }>`
  background-color: ${(p) => `var(--color-${p.color})`};
`;

/**
 * Grid component
 */
export const ColorBox = ({ color, children, className }: ColorProps) => {
  return (
    <ColoredBox color={color} className={className}>
      {children}
    </ColoredBox>
  );
};
