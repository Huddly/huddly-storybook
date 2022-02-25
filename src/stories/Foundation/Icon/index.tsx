import React from 'react';
import styled from 'styled-components';

import { icons } from './icons';
import { StandardColors } from '../../../shared/types';
interface WrapperProps {
  color: StandardColors;
}

const Wrapper = styled.svg<WrapperProps>`
  path {
    fill: ${(props) => `var(--color-${props.color})`};
  }
`;

export interface IconProps {
  className?: string;
  color?: StandardColors;
  icon: keyof typeof icons;
  size?: 24 | 48;
}

/**
 * Icon component
 */
export const Icon = ({
  className,
  icon,
  color = 'black',
  size = 24,
}: IconProps) => {
  if (!icons[icon]) {
    throw new Error(`Invalid icon: ${icon}`);
  }

  return (
    <Wrapper
      className={className}
      color={color}
      width={size}
      height={size}
      viewBox='0 0 1024 1024'
    >
      <path d={icons[icon][size]}></path>
    </Wrapper>
  );
};
