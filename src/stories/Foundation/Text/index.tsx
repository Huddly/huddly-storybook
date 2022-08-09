import React from 'react';
import { Colors } from '../../../shared/colors';
import styled from 'styled-components';

export const Wrapper = styled.p<TextProps>`
  margin: 0;
  line-height: 1.2em;
  font-size: ${(p) => `var(--font-size-${p.size})`};
  color: ${(p) => `var(--color-${p.color})`};
  font-weight: ${(p) => (p.bold ? 'bold' : 'normal')};
`;
export interface TextProps {
  size?: '14' | '16' | '18' | '22' | '28' | '48' | '68' | '98';
  color?: Colors;
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  bold?: boolean;
  children: React.ReactNode;
  className?: string;
}

type TextElement = HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement;

/**
 * Text component
 */
export const Text = React.forwardRef(
  (props: TextProps, ref: React.RefObject<TextElement>) => {
    const {
      size = '14',
      color = 'black',
      type = 'p',
      bold,
      children,
      className,
    } = props;

    return (
      <Wrapper
        as={type as TextProps['type']}
        bold={bold}
        className={className}
        color={color}
        ref={ref}
        size={size}
      >
        {children}
      </Wrapper>
    );
  }
);
