import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Minus = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Minus icon'}</title>
      <path d='M3 12H21' stroke={color} strokeWidth='2' fill={color} />
    </svg>
  );
};
