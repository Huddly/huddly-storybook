import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';

const Wrapper = styled.span`
  background-color: var(--color-lavender);
  color: var(--color-white);
  font-family: var(--font-family);
  font-size: ${rem(14)};
  padding: ${rem(2)} ${rem(5)};
  height: 100%;
`;

export interface BadgeProps {
  children: React.ReactNode;
}

/**
 * Badge component
 */
export const Badge = ({ children }: BadgeProps) => {
  return <Wrapper>{children}</Wrapper>;
};
