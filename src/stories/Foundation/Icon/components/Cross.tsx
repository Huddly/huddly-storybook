import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const Cross = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'Cross icon'}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.0001 13.4142L18.793 20.2071L20.2072 18.7929L13.4143 12L20.2072 5.20711L18.793 3.79289L12.0001 10.5858L5.20718 3.79289L3.79297 5.20711L10.5859 12L3.79297 18.7929L5.20718 20.2071L12.0001 13.4142Z'
        fill={color}
      />
    </svg>
  );
};
