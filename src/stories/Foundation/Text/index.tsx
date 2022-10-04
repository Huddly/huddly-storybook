import React from 'react';
import { Colors } from '../../../shared/colors';
import styled from 'styled-components';

export const Wrapper = styled.p<TextProps>`
  margin: 0;
  line-height: 1.6;
  font-size: ${(p) => `var(--font-size-${p.size})`};
  color: ${(p) => `var(--color-${p.color})`};
  font-weight: ${(p) => (p.bold ? 'bold' : 'normal')};
  letter-spacing: ${(p) => (p.extraLetterSpacing ? '0.02em' : 'normal')};
`;
export interface TextProps {
  size?: '12' | '14' | '16' | '18' | '22' | '28' | '48' | '68' | '98';
  color?: Colors;
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  bold?: boolean;
  extraLetterSpacing?: boolean;
  children: React.ReactNode;
  className?: string;
}
/**
 * Text component
 */
export const Text = ({
  size = '14',
  color = 'grey15',
  type = 'p',
  bold,
  children,
  className,
  extraLetterSpacing,
}: TextProps) => {
  return (
    <Wrapper
      as={type as TextProps['type']}
      bold={bold}
      size={size}
      color={color}
      className={className}
      extraLetterSpacing={extraLetterSpacing}
    >
      {children}
    </Wrapper>
  );
};
