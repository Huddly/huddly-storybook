import React from 'react';
import * as icons from './icons';
import { StandardColors } from '../../../shared/types';

export interface IconProps {
  className?: string;
  color?: StandardColors;
  size?: 24 | 48;
  name: keyof typeof icons;
}

// name should accept the name of IconProps
const getIcon = (name: IconProps['name'], size: IconProps['size']) => {
  const formattedName = name.toLowerCase();

  if (!icons[formattedName]) {
    throw new Error(`Invalid icon: ${formattedName}`);
  }
  if (!icons[formattedName][size]) {
    throw new Error(`Invalid icon size: ${formattedName}`);
  }

  return icons[formattedName][size];
};

/**
 * Icon component
 */
export const Icon = ({
  className,
  name,
  color = 'black',
  size = 24,
}: IconProps) => {
  const fill = `var(--color-${color})`;
  const icon = getIcon(name, size);

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox='0 0 1024 1024'
    >
      <title>{name}</title>
      <path fill={fill} d={icon}></path>
    </svg>
  );
};
