import React from 'react';

export interface Props {
  className?: string;
  color?: string;
  title?: string;
}

export const ChevronRight = ({ className, color = '#262626', title }: Props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <title>{title || 'ChevronRight icon'}</title>
      <path
        d='M15.6464 11.6464L16.3536 10.9393L15.6464 11.6464ZM8.70711 20.7071L16.3536 13.0607L14.9393 11.6464L7.29289 19.2929L8.70711 20.7071ZM16.3536 10.9393L8.70711 3.29289L7.29289 4.70711L14.9393 12.3536L16.3536 10.9393ZM16.3536 13.0607C16.9393 12.4749 16.9393 11.5251 16.3536 10.9393L14.9393 12.3536C14.7441 12.1583 14.7441 11.8417 14.9393 11.6464L16.3536 13.0607Z'
        fill={color}
      />
    </svg>
  );
};
