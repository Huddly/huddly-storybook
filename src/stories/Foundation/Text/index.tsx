import React from 'react';
import { Colors } from '../../../shared/types';
import styled from 'styled-components';

export const Wrapper = styled.p<TextProps>`
  margin: 0;
  line-height: 1.2em;
  font-size: ${(p) => `var(--font-size-${p.size})`};
  color: ${(p) => `var(--color-${p.color})`};
  font-weight: ${(p) => (p.bold ? 'bold' : 'normal')};
`;
export interface TextProps {
  size?: '14' | '18' | '22' | '28' | '48' | '68' | '98';
  color?: Colors;
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  bold?: boolean;
  children: React.ReactNode;
  className?: string;
}
/**
 * Text component
 */
export const Text = ({
  size = '14',
  color = 'black',
  type = 'p',
  bold,
  children,
  className,
}: TextProps) => {
  return (
    <Wrapper
      as={type as TextProps['type']}
      bold={bold}
      size={size}
      color={color}
      className={className}
    >
      {children}
    </Wrapper>
  );
};
