import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Usb = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Usb icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 2H14V6H10V2ZM8 6.26756V6V2C8 0.895431 8.89543 0 10 0H14C15.1046 0 16 0.895431 16 2V6V6.26756C16.5978 6.61337 17 7.25972 17 8V17C17 18.1046 16.1046 19 15 19H14V21H13V22V23V24H11V23V22V21H10V19H9C7.89543 19 7 18.1046 7 17V8C7 7.25972 7.4022 6.61337 8 6.26756ZM9 8L9 17H15V8H14H10H9Z'
        fill={color}
      />
    </svg>
  );
};
