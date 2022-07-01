import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Plus = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Plus icon'}</title>
      <path fillRule='evenodd' clipRule='evenodd' d='M11 13L11 21H13V13H21V11H13V3H11L11 11H3V13H11Z' fill={color} />
    </svg>
  );
};
