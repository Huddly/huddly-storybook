import React from 'react';
import * as icons from './components';
import { getHexColor, Colors } from '../../../shared/colors';

export type Icons = keyof typeof icons;
export interface IconProps {
  name: Icons;
  className?: string;
  color?: Colors;
}

// name should accept the name of IconProps
const getIcon = (name: Icons) => {
  if (!icons[name]) {
    throw new Error(`Invalid icon: ${name}`);
  }
  return icons[name];
};

/**
 * Icon component
 */
export const Icon = ({ className, name, color = 'black' }: IconProps) => {
  const Icon = getIcon(name);
  return <Icon className={className} color={getHexColor(color)} />;
};
