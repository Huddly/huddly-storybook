import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Menu = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Menu icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22 6L2 6V4H22V6ZM22 20L2 20V18L22 18V20ZM2 13H22V11H2V13Z'
        fill={color}
      />
    </svg>
  );
};
